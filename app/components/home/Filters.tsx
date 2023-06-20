import {MouseEvent, useContext} from 'react'
import {HomeContext} from '@/services/contextAPI'
import {Status} from '@/services/types'

const buttons = [{value: 'NFT'}, {value: 'DeFi'}, {value: 'Wallet'}, {value: 'Marketplace'}, {value: 'Media'}]

export default function Filters() {
	let {filter, setFilter, setStatus} = useContext(HomeContext)
	const onChangeFilter = (e: MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.value === filter) {
			setFilter('')
		} else {
			setFilter(e.currentTarget.value)
		}
		setStatus(Status.filter)
	}
	return (
		<div className='filters'>
			{buttons.map((button, idx) => (
				<button
					key={idx}
					className={filter === button.value ? 'button active' : 'button'}
					value={button.value}
					onClick={(e: MouseEvent<HTMLButtonElement>) => onChangeFilter(e)}>
					{button.value}
				</button>
			))}
		</div>
	)
}

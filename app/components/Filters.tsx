import {MouseEvent} from 'react'

const buttons = [
	{value: 'NFT'},
	{value: 'DeFi'},
	{value: 'Launchpad'},
	{value: 'Meme'},
	{value: 'Wallet'},
	{value: 'Media'},
	{value: 'Educative'}
]

type FiltersProps = {
	filter: string
	changeFilter: (e: string) => void
}

export default function Filters({filter, changeFilter}: FiltersProps) {
	return (
		<div className='filters'>
			{buttons.map((button, idx) => (
				<button
					key={idx}
					className={filter === button.value ? 'button active' : 'button'}
					value={button.value}
					onClick={(e: MouseEvent<HTMLButtonElement>) =>
						changeFilter(e.currentTarget.value)
					}>
					{button.value}
				</button>
			))}
		</div>
	)
}

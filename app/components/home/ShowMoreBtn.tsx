import {useContext} from 'react'
import {HomeContext} from '@/services/contextAPI'
import {Status} from '@/services/types'

export default function ShowMoreBtn() {
	let {status, setStatus, projects, filter} = useContext(HomeContext)
	const handleButton = () => {
		if (status !== Status.fetching) {
			if (projects.length > 12) setStatus(Status.show12)
			else setStatus(Status.show999)
		}
	}

	const rendered = () => {
		if (filter === '' && status !== Status.search) {
			return (
				<button
					className={status === Status.fetching || status === Status.loading ? 'button blinking' : 'button'}
					onClick={handleButton}
					disabled={status === Status.fetching || (status === Status.loading && true)}>
					{status === Status.fetching || status === Status.loading
						? 'LOADING...'
						: projects.length > 12
						? 'HIDE'
						: 'SHOW MORE'}
				</button>
			)
		}
	}

	return rendered()
}

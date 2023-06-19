import {Status} from '@/app/page'
import {useContext} from 'react'
import {HomeContext} from '@/services/contextAPI'

export default function ShowMoreBtn() {
	let {status, setStatus, projects} = useContext(HomeContext)
	const handleButton = () => {
		if (status !== Status.fetching) {
			if (projects.length > 12) setStatus(Status.show12)
			else setStatus(Status.show999)
		}
	}

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

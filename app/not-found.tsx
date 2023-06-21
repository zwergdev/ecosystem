import Link from 'next/link'
import './style/submit.scss'

export default function () {
	return (
		<div className='successPage'>
			<h1>
				<span>Not</span> Found
			</h1>
			<p>Could not find requested resource</p>
			<Link className='button' href='/'>
				Home
			</Link>
		</div>
	)
}

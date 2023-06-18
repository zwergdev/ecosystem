import '../style/submit.scss'
import Link from 'next/link'

export default function () {
	return (
		<div className='successPage'>
			<h1>
				The <span>form</span> has been <span>submitted</span>.
			</h1>
			<p>Your project will soon appear on the website after verification.</p>
			<Link href='/' className='button'>
				OK
			</Link>
		</div>
	)
}

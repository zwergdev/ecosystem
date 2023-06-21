'use client'
import Link from 'next/link'
import './../../style/submit.scss'

export default function () {
	return (
		<div className='successPage'>
			<h1>
				<span>Error</span>!
			</h1>
			<p>Something went wrong!</p>
			<Link className='button' href='/'>
				Home
			</Link>
		</div>
	)
}

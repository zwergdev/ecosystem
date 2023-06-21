import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer>
			<div className='container'>
				<p>
					Developed by{' '}
					<Link href='https://twitter.com/zwergdev' target='_blank'>
						zwerg
					</Link>
					.
				</p>
				<Link href='https://github.com/zwergdev/ecosystem'>
					<Image src='img/socials/github.svg' width={30} height={30} className='gitLogo' alt='github logo' />
				</Link>
			</div>
		</footer>
	)
}

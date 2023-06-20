import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
	return (
		<header>
			<div className='container'>
				<nav>
					<Link href='/'>
						<Image src='/img/logo.png' width={75} height={75} alt='logo' />
					</Link>
					<Link href={'/submit'} className='button'>
						Submit Project
					</Link>
				</nav>
			</div>
		</header>
	)
}

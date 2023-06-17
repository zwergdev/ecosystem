import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/img/logo.png'

export default function Header() {
	return (
		<header>
			<div className='container'>
				<nav>
					<Link href='/'>
						<Image src={logo} alt='logo' />
					</Link>
					<Link href='/submit' className='button'>
						Submit Project
					</Link>
				</nav>
			</div>
		</header>
	)
}

import './style/home.scss'
import {JetBrains_Mono} from 'next/font/google'
import Footer from './components/general/Footer'
import Image from 'next/image'
import Header from './components/general/Header'
import {ReactNode} from 'react'
import {Metadata} from 'next'

const jetBrains = JetBrains_Mono({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Zwerg Ecosystem',
	description: 'Explore the Zwerg Ecosystem',
	themeColor: 'black',
	openGraph: {
		title: 'Zwerg Ecosystem',
		description: 'Explore the Zwerg Ecosystem',
		url: 'https://ecosystem-ten.vercel.app',
		siteName: 'Ecosystem Template',
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Zwerg Ecosystem',
		description: 'Explore the Zwerg Ecosystem',
		siteId: '1654564851425869826',
		creator: '@zwergdev',
		creatorId: '1654564851425869826'
	}
}

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang='en'>
			<body className={jetBrains.className}>
				<div className='bgWrap'>
					<Image priority={true} src='/img/bg.jpg' width={1280} height={720} alt='background' />
				</div>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

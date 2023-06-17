import Link from 'next/link'
import Image from 'next/image'
import twitter from '@/public/img/socials/twitter.svg'
import discord from '@/public/img/socials/discord.svg'
import medium from '@/public/img/socials/medium.svg'
import gitbook from '@/public/img/socials/gitbook.svg'
import site from '@/public/img/socials/site.svg'
import zealy from '@/public/img/socials/zealy.svg'
import {Project} from '@/app/api/projects/projects'
import {FC} from 'react'

interface SocialLinks {
	[key: string]: string
}
const socialLinksImages: SocialLinks = {
	twitter: twitter,
	discord: discord,
	medium: medium,
	gitbook: gitbook,
	site: site,
	zealy: zealy
}
interface ProjectSocialsProps {
	project: Project
}
const Socials: FC<ProjectSocialsProps> = ({project}) => {
	return (
		<div className='socials'>
			{Object.entries(project.socials as {[key: string]: string}).map(
				([key, value]: any) => (
					<Link key={key} href={value} target='_blank'>
						<Image
							src={socialLinksImages[key]}
							width={30}
							height={30}
							alt={''}
						/>
					</Link>
				)
			)}
		</div>
	)
}

export default Socials

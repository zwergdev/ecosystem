import {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Socials from '@/app/components/project/Socials'
import {SITE_URL} from '@/services/getProjects'
import React from 'react'

type Props = {
	params: {name: string}
}

async function getData(name: string) {
	const response = await fetch(`${SITE_URL}/api/projects/${name}`)
	return response.json()
}

export async function generateMetadata({params: {name}}: Props): Promise<Metadata> {
	const project = name.replace(/%20/g, ' ').replace(/(^|\s)\S/g, match => match.toUpperCase())

	return {title: `Ecosystem | ${project}`}
}

export default async function Project({params: {name}}: Props) {
	const projects = await getData(name)
	const project = projects[0]
	return (
		<main className='container projectPage'>
			<div className='projectBox'>
				<Image
					priority={true}
					className='projectLogo'
					src={project.image}
					width={200}
					height={200}
					alt={`${project.name} logo`}
				/>
				<div className='projectInfo'>
					<h1>{project.name}</h1>
					<p>{project.sector}</p>
					<p>Rating: {project.rating}</p>
					<Socials project={project} />
				</div>
				<p className='projectDesc'>{project.desc}</p>
			</div>
			<Link className='button back' href={'/'}>
				BACK
			</Link>
		</main>
	)
}

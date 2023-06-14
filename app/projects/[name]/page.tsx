import '../../style/project.scss'
import {Metadata} from 'next'
import Image from 'next/image'
import Socials from '@/app/components/Socials'

type Props = {
	params: {name: string}
}

async function getData(name: string) {
	const response = await fetch(`http://localhost:3000/api/projects/${name}`, {
		next: {revalidate: 180}
	})
	return response.json()
}

export async function generateMetadata({
	params: {name}
}: Props): Promise<Metadata> {
	return {title: `Ecosystem | ${name}`}
}

export default async function Project({params: {name}}: Props) {
	const projects = await getData(name)
	const project = projects[0]
	return (
		<div className='projectPage container'>
			<Image
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
			</div>
			<div>
				<p>{project.desc}</p>
				<Socials project={project} />
			</div>
		</div>
	)
}

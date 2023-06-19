import Link from 'next/link'
import Image from 'next/image'
import {Project} from '@/app/api/projects/projects'
import {useContext} from 'react'
import {HomeContext} from '@/services/contextAPI'

export default function Projects() {
	let {projects} = useContext(HomeContext)

	return (
		<div className='projectsBox'>
			{projects.map((project: Project, idx: number) => (
				<Link href={`/projects/${project.name.toLowerCase()}`} key={idx} className='item'>
					<Image src={project.image} width={100} height={100} alt='project logo' />
					<div className='bio'>
						<div className='nameSector'>
							<span>{project.name}</span>
							<small>{project.sector}</small>
						</div>
						<small>Rating: {project.rating}</small>
					</div>
				</Link>
			))}
		</div>
	)
}

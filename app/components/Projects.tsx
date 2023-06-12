import Link from 'next/link'
import Image from 'next/image'
import {Project} from '@/app/api/projects/projects'
import {FC} from 'react'

interface ProjectsListProps {
	projects: Project[]
}
const Projects: FC<ProjectsListProps> = ({projects}) => {
	return (
		<section className='container projects'>
			<div className='projectsBox'>
				{projects.map((project: Project, idx: number) => (
					<Link
						href={`/projects/${project.name.toLowerCase()}`}
						key={idx}
						className='item'>
						<Image
							src={project.image}
							width={100}
							height={100}
							alt='project logo'
						/>
						<div className='bio'>
							<div className='nameSector'>
								<span>{project.name}</span>
								<small>{project.sector}</small>
							</div>
							<small>Rating: {project.rating}</small>
						</div>
					</Link>
				))}
				<button className='button'>SHOW MORE</button>
			</div>
		</section>
	)
}

export default Projects

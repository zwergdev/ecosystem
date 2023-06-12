'use client'
import {Project} from './api/projects/projects'
import {useEffect, useState} from 'react'
import {getProjects} from '@/services/getProjects'
import Projects from '@/app/components/Projects'
import ProjectSearch from '@/app/components/ProjectSearch'

export default function Home() {
	const [projects, setProjects] = useState<Project[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getProjects()
			.then(setProjects)
			.finally(() => setLoading(false))
	}, [])

	return (
		<main>
			<section className='container mainBanner'>
				<h1>
					EXPLORE THE <span>ZWERG</span> ECOSYSTEM
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
					deleniti!
				</p>
				<ProjectSearch onSearch={setProjects} />
				<h2>Zwerg Ecosystem</h2>
			</section>
			{loading ? <h1>Loading...</h1> : <Projects projects={projects} />}
		</main>
	)
}

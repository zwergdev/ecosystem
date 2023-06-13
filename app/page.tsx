'use client'
import {Project} from './api/projects/projects'
import {useEffect, useState} from 'react'
import {getProjects} from '@/services/getProjects'
import Projects from '@/app/components/Projects'
import ProjectSearch from '@/app/components/ProjectSearch'

export default function Home() {
	const [projects, setProjects] = useState<Project[]>([])
	const [loading, setLoading] = useState(true)
	const [showed, setShowed] = useState(false)
	const [fetchingNew, setFetchingNew] = useState(false)

	useEffect(() => {
		if (!showed) {
			getProjects('6')
				.then(setProjects)
				.finally(() => setLoading(false))
		} else {
			getProjects('999')
				.then(setProjects)
				.finally(() => setFetchingNew(false))
		}
	}, [showed])

	const changeShowed = () => {
		setShowed(!showed)
		if (showed) {
			setFetchingNew(false)
		} else {
			setFetchingNew(true)
		}
	}

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
			<section className='container projects'>
				{loading ? <h1>Loading...</h1> : <Projects projects={projects} />}
				<button
					className={fetchingNew ? 'button blinking' : 'button'}
					onClick={changeShowed}
					disabled={fetchingNew && true}>
					{fetchingNew ? 'LOADING...' : showed ? 'HIDE' : 'SHOW MORE'}
				</button>
			</section>
		</main>
	)
}

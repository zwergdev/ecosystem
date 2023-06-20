'use client'
import {Project} from './api/projects/projects'
import {useEffect, useState} from 'react'
import {getProjects, getProjectsByFilter} from '@/services/getProjects'
import Projects from '@/app/components/home/Projects'
import ProjectSearch from '@/app/components/home/ProjectSearch'
import Filters from '@/app/components/home/Filters'
import ShowMoreBtn from '@/app/components/home/ShowMoreBtn'
import {HomeContext} from '@/services/contextAPI'
import {Status} from '@/services/types'

export default function Home() {
	const [projects, setProjects] = useState<Project[]>([])
	const [filter, setFilter] = useState<string>('')
	const [status, setStatus] = useState<Status>(Status.loading)

	useEffect(() => {
		if (status === Status.loading) {
			fetchData('12')
		} else if (status === Status.show999 || status === Status.show12) {
			fetchData(status === Status.show999 ? '999' : '12')
		} else if (status === Status.filter) {
			fetchData(filter ? 'filter' : '12')
		}
	}, [status])

	const fetchData = (type: string) => {
		setStatus(Status.fetching)
		if (type === 'filter') {
			getProjectsByFilter(filter)
				.then(setProjects)
				.finally(() => setStatus(Status.fetched))
		} else {
			getProjects(type)
				.then(setProjects)
				.finally(() => setStatus(Status.fetched))
		}
	}

	return (
		<main>
			<section className='container mainBanner'>
				<h1>
					EXPL0RE
					<br />
					TH3<span>ZWERG</span>
					<br />
					EC0SYSTEM
				</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, deleniti!</p>
			</section>
			<section className='container projects'>
				<HomeContext.Provider value={{status, setStatus, setProjects, setFilter, filter, projects}}>
					<ProjectSearch />
					<Filters />
					<Projects />
					<ShowMoreBtn />
				</HomeContext.Provider>
			</section>
		</main>
	)
}

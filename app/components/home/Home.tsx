'use client'
import {useEffect, useState} from 'react'
import {Project} from '@/app/api/projects/projects'
import {Status} from '@/services/types'
import {getProjects, getProjectsByFilter} from '@/services/getProjects'
import ProjectSearch from '@/app/components/home/ProjectSearch'
import Filters from '@/app/components/home/Filters'
import ProjectsList from '@/app/components/home/ProjectsList'
import ShowMoreBtn from '@/app/components/home/ShowMoreBtn'
import {HomeContext} from '@/services/contextAPI'

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
		<HomeContext.Provider value={{status, setStatus, setProjects, setFilter, filter, projects}}>
			<ProjectSearch />
			<Filters />
			<ProjectsList />
			<ShowMoreBtn />
		</HomeContext.Provider>
	)
}

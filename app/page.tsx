'use client'
import {Project} from './api/projects/projects'
import {useEffect, useState} from 'react'
import {getProjects, getProjectsByFilter} from '@/services/getProjects'
import Projects from '@/app/components/Projects'
import ProjectSearch from '@/app/components/ProjectSearch'
import Filters from '@/app/components/Filters'

export default function Home() {
	const [projects, setProjects] = useState<Project[]>([])
	const [filter, setFilter] = useState<string>('')
	const [loading, setLoading] = useState(true)
	const [showed, setShowed] = useState(false)
	const [fetchingNew, setFetchingNew] = useState(false)
	const [activeInput, setActiveInput] = useState(false)

	useEffect(() => {
		if (!showed) {
			getProjects('12')
				.then(setProjects)
				.finally(() => setLoading(false))
		} else {
			getProjects('999')
				.then(setProjects)
				.finally(() => setFetchingNew(false))
		}
	}, [showed])

	useEffect(() => {
		if (filter !== '') {
			getProjectsByFilter(filter).then(setProjects)
		}
	}, [filter])

	const changeShowed = () => {
		setShowed(!showed)
		if (showed) {
			setFetchingNew(false)
		} else {
			setFetchingNew(true)
		}
	}

	const changeFilter = (value: string) => {
		if (value === filter) {
			setFilter('')
			getProjects('12')
				.then(setProjects)
				.finally(() => setLoading(false))
		} else {
			setFilter(value)
		}
		setShowed(false)
		setActiveInput(false)
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
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
					deleniti!
				</p>
				<ProjectSearch
					setActiveInput={setActiveInput}
					onSearch={setProjects}
					setFilter={setFilter}
				/>
			</section>
			<section className='container projects'>
				<Filters filter={filter} changeFilter={changeFilter} />
				{loading ? '' : <Projects projects={projects} />}

				{filter === '' && !activeInput ? (
					<button
						className={fetchingNew ? 'button blinking' : 'button'}
						onClick={changeShowed}
						disabled={fetchingNew && true}>
						{loading
							? 'LOADING...'
							: fetchingNew
							? 'LOADING...'
							: showed
							? 'HIDE'
							: 'SHOW MORE'}
					</button>
				) : (
					''
				)}
			</section>
		</main>
	)
}

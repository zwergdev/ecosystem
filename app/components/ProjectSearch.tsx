'use client'
import {useState, useCallback, useEffect, ChangeEventHandler} from 'react'
import {getProjectsBySearch} from '@/services/getProjects'
import {Project} from '@/app/api/projects/projects'
import debounce from 'lodash.debounce'

type Props = {
	onSearch: (value: Project[]) => void
	setActiveInput: (value: boolean) => void
	setFilter: (value: string) => void
}

const ProjectSearch = ({onSearch, setActiveInput, setFilter}: Props) => {
	const [search, setSearch] = useState<string>('')
	const [ready, setReady] = useState(false)

	const debouncedGetProjectsBySearch = useCallback(
		debounce(async (value: string) => {
			const posts = await getProjectsBySearch(value)
			onSearch(posts)
		}, 400),
		[]
	)

	useEffect(() => {
		if (ready) {
			debouncedGetProjectsBySearch(search)
		}
		if (search === '') {
			setActiveInput(false)
		}
	}, [debouncedGetProjectsBySearch, search])

	const handleSearch: ChangeEventHandler<HTMLInputElement> = e => {
		setSearch(e.target.value)
		setReady(true)
		setActiveInput(true)
		setFilter('')
	}

	return (
		<>
			<input
				type='text'
				placeholder='Search Zwerg Project'
				value={search}
				onChange={e => handleSearch(e)}
			/>
		</>
	)
}

export default ProjectSearch

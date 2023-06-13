'use client'
import {useState, useCallback, useEffect, ChangeEventHandler} from 'react'
import {getProjectsBySearch} from '@/services/getProjects'
import {Project} from '@/app/api/projects/projects'
import debounce from 'lodash.debounce'

type Props = {
	onSearch: (value: Project[]) => void
}

const ProjectSearch = ({onSearch}: Props) => {
	const [search, setSearch] = useState<string>('')

	const debouncedGetProjectsBySearch = useCallback(
		debounce(async (value: string) => {
			const posts = await getProjectsBySearch(value)
			onSearch(posts)
		}, 400),
		[]
	)

	useEffect(() => {
		if (search !== '') {
			debouncedGetProjectsBySearch(search)
		}
	}, [debouncedGetProjectsBySearch, search])

	const handleSearch: ChangeEventHandler<HTMLInputElement> = e => {
		setSearch(e.target.value)
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

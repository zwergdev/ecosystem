'use client'
import {useState, FormEventHandler} from 'react'
import {getProjectsBySearch} from '@/services/getProjects'
import {Project} from '@/app/api/projects/projects'

type Props = {
	onSearch: (value: Project[]) => void
}

const ProjectSearch = ({onSearch}: Props) => {
	const [search, setSearch] = useState<string>('')

	const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault()
		const posts = await getProjectsBySearch(search)
		onSearch(posts)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search Zwerg Project'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</form>
	)
}

export default ProjectSearch

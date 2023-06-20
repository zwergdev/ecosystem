import {ChangeEventHandler, useCallback, useContext, useEffect, useState} from 'react'
import {getProjectsBySearch} from '@/services/getProjects'
import debounce from 'lodash.debounce'
import {HomeContext} from '@/services/contextAPI'
import {Status} from '@/services/types'

const ProjectSearch = () => {
	let {setProjects, setFilter, setStatus} = useContext(HomeContext)
	const [search, setSearch] = useState<string>('')
	const [ready, setReady] = useState(false)

	const debouncedGetProjectsBySearch = useCallback(
		debounce(async (value: string) => {
			const posts = await getProjectsBySearch(value)
			setProjects(posts)
		}, 400),
		[]
	)

	useEffect(() => {
		if (ready) {
			debouncedGetProjectsBySearch(search)
		}
		if (search === '') {
			setStatus(Status.loaded)
		}
	}, [debouncedGetProjectsBySearch, search])

	const handleSearch: ChangeEventHandler<HTMLInputElement> = e => {
		setSearch(e.target.value)
		setReady(true)
		setStatus(Status.search)
		setFilter('')
	}

	return (
		<div className='searchbarBox'>
			<label htmlFor='search' className={search && 'toTop'}>
				Search Zwerg Project
			</label>
			<input
				className='searchbar'
				autoComplete='off'
				autoCorrect='off'
				id='search'
				type='text'
				value={search}
				onChange={e => handleSearch(e)}
			/>
		</div>
	)
}

export default ProjectSearch

export const getProjects = async (size: string) => {
	const response = await fetch(`http://localhost:3000/api/projects?s=${size}`)
	if (!response.ok) {
		throw new Error('Unable to fetch projects.')
	}

	return response.json()
}

export const getProjectsBySearch = async (name: string) => {
	const response = await fetch(`http://localhost:3000/api/projects?q=${name}`)
	if (!response.ok) {
		throw new Error('Unable to fetch current project.')
	}

	return response.json()
}

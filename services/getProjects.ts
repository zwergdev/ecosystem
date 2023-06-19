import {formValues} from '@/app/submit/page'

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

export const getProjectsByFilter = async (value: string) => {
	const response = await fetch(`http://localhost:3000/api/projects?v=${value}`)
	if (!response.ok) {
		throw new Error('Unable to fetch current filter.')
	}

	return response.json()
}

export const sendTelegramForm = async (formValues: formValues) => {
	const response = await fetch(`http://localhost:3000/api/form`, {method: 'POST', body: JSON.stringify(formValues)})
	if (!response.ok) {
		throw new Error('Unable to send form.')
	}

	return response.json()
}

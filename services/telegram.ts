import {formValues} from '@/app/submit/page'
import {SITE_URL} from '@/services/getProjects'

export const sendTelegramForm = async (formValues: formValues) => {
	const response = await fetch(`${SITE_URL}/api/form`, {
		method: 'POST',
		body: JSON.stringify(formValues)
	})
	if (!response.ok) {
		throw new Error('Unable to send form.')
	}

	return response.json()
}

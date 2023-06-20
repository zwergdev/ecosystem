import {formValues} from '@/app/submit/page'

export const sendTelegramForm = async (formValues: formValues) => {
	const response = await fetch(`https://ecosystem-ten.vercel.app/api/form`, {
		method: 'POST',
		body: JSON.stringify(formValues)
	})
	if (!response.ok) {
		throw new Error('Unable to send form.')
	}

	return response.json()
}

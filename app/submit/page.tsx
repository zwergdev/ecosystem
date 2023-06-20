'use client'
import '../style/submit.scss'
import SelectSectorBtns from '@/app/components/submit_project/SelectSectorBtns'
import FormInputs from '@/app/components/submit_project/FormInputs'
import DescriptionTextArea from '@/app/components/submit_project/DescriptionTextArea'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import {sendTelegramForm} from '@/services/telegram'
import {FormContext} from '@/services/contextAPI'

export type formValues = {
	name: string
	twitter: string
	discord: string
	medium: string
	gitbook: string
	site: string
	zealy: string
	sector: string
	desc: string
}
export default function () {
	const router = useRouter()
	const [status, setStatus] = useState<string>('Submit')
	const [formValues, setFormValues] = useState<formValues>({
		name: '',
		twitter: '',
		discord: '',
		medium: '',
		gitbook: '',
		site: '',
		zealy: '',
		sector: '',
		desc: ''
	})

	const handleInputChange = (event: any) => {
		const {name, value} = event.target
		setFormValues({...formValues, [name]: value})
	}
	const sendForm = async () => {
		if (formValues.name && formValues.twitter && formValues.desc) {
			const response = await sendTelegramForm(formValues)
			if (response.ok) {
				router.push('/success')
			} else {
				setStatus('Server Error')
			}
		} else {
			setStatus('Check required lines')
		}
	}
	useEffect(() => {
		if (formValues.name && formValues.twitter && formValues.desc) {
			setStatus('Submit')
		}
	}, [formValues.name, formValues.twitter, formValues.desc])

	return (
		<main>
			<div className='submitBox'>
				<FormContext.Provider value={{formValues, handleInputChange, status}}>
					<FormInputs />
					<SelectSectorBtns />
					<DescriptionTextArea />
					<button className='button' onClick={sendForm}>
						{status}
					</button>
				</FormContext.Provider>
			</div>
		</main>
	)
}

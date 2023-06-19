'use client'
import '../style/submit.scss'
import SelectSectorBtns from '@/app/components/submit_project/SelectSectorBtns'
import FormInputs from '@/app/components/submit_project/FormInputs'
import DescriptionTextArea from '@/app/components/submit_project/DescriptionTextArea'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import {sendTelegramForm} from '@/services/telegram'

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
	const [triedToSend, setTriedToSend] = useState(false)
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
	const handleSectorChange = (event: any) => {
		setFormValues({...formValues, sector: event.target.value})
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
			setTriedToSend(true)
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
				<FormInputs handleInputChange={handleInputChange} formValues={formValues} triedToSend={triedToSend} />
				<SelectSectorBtns handleSectorChange={handleSectorChange} sectorValue={formValues.sector} />
				<DescriptionTextArea
					handleInputChange={handleInputChange}
					descValue={formValues.desc}
					triedToSend={triedToSend}
				/>
				<button className='button' onClick={sendForm}>
					{status}
				</button>
			</div>
		</main>
	)
}

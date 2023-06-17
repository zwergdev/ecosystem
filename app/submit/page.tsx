'use client'
import '../style/submit.scss'
import {useState} from 'react'
import SelectSectorBtns from '@/app/components/submit_project/SelectSectorBtns'
import FormInputs from '@/app/components/submit_project/FormInputs'
import DescriptionTextArea from '@/app/components/submit_project/DescriptionTextArea'

export default function Submit() {
	const [formValues, setFormValues] = useState({
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

	return (
		<main>
			<div className='submitBox'>
				<FormInputs
					handleInputChange={handleInputChange}
					formValues={formValues}
				/>
				<SelectSectorBtns
					handleSectorChange={handleSectorChange}
					sectorValue={formValues.sector}
				/>
				<DescriptionTextArea
					handleInputChange={handleInputChange}
					descValue={formValues.desc}
				/>
			</div>
		</main>
	)
}

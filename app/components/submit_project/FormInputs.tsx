import React, {useContext} from 'react'
import {FormContext} from '@/services/contextAPI'

type Input = {
	name: string
	type: string
	placeholder: string
	required?: boolean
}

const inputs: Input[] = [
	{name: 'name', type: 'text', placeholder: "Project's name", required: true},
	{name: 'twitter', type: 'url', placeholder: 'Twitter tag', required: true},
	{name: 'discord', type: 'url', placeholder: 'Discord link'},
	{name: 'medium', type: 'url', placeholder: 'Medium/blog link'},
	{name: 'gitbook', type: 'url', placeholder: 'Whitepaper/docs link'},
	{name: 'site', type: 'url', placeholder: 'Website link'},
	{name: 'zealy', type: 'url', placeholder: 'Zealy/Quest3/Galxe etc.'}
]

const FormInputs = () => {
	let {formValues, handleInputChange, status} = useContext(FormContext)

	const handleErrorStyle = (obj: Input) => {
		if (formValues[obj.name] === '' && status === 'Check required lines' && obj.required) {
			return 'required'
		}
	}

	return inputs.map((obj, _idx) => (
		<div className='inputBox' key={_idx}>
			<label htmlFor={`${_idx}${obj.name}`} className={formValues[obj.name] && 'typed'}>
				{obj.placeholder}
				{obj.required && '*'}
			</label>
			<input
				className={handleErrorStyle(obj)}
				onChange={e => handleInputChange(e)}
				autoComplete='off'
				autoCorrect='off'
				id={`${_idx}${obj.name}`}
				value={formValues[obj.name]}
				name={obj.name}
				type={obj.type}
			/>
		</div>
	))
}
export default FormInputs

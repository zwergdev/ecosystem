import React, {useContext} from 'react'
import {FormContext} from '@/services/contextAPI'
const DescriptionTextArea = () => {
	let {formValues, handleInputChange, status} = useContext(FormContext)
	const {desc} = formValues
	const {length} = desc

	const handleHeight = () => {
		if (desc === '' && status === 'Check required lines') {
			return 'required'
		}
		if (length > 100) return 'resized100'
		if (length > 200) return 'resized200'
		if (length > 300) return 'resized300'
		if (length > 400) return 'resized400'
	}

	return (
		<div className='textAreaBox'>
			<label htmlFor='desc' className={desc && 'toTop'}>
				Project's description*
			</label>
			<textarea className={handleHeight()} value={desc} name='desc' id='desc' onChange={e => handleInputChange(e)} />
		</div>
	)
}
export default DescriptionTextArea

import React from 'react'
import {formValues} from '@/app/submit/page'

interface TextArea {
	descValue: formValues['desc']
	handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	triedToSend: boolean
}
const DescriptionTextArea: React.FC<TextArea> = ({descValue, handleInputChange, triedToSend}) => {
	const {length} = descValue

	return (
		<div className='textAreaBox'>
			<label htmlFor='desc' className={descValue && 'toTop'}>
				Project's description*
			</label>
			<textarea
				className={
					descValue === '' && triedToSend
						? 'required'
						: length > 400
						? 'resized400'
						: length > 300
						? 'resized300'
						: length > 200
						? 'resized200'
						: length > 100
						? 'resized100'
						: ''
				}
				value={descValue}
				name='desc'
				id='desc'
				onChange={e => handleInputChange(e)}
			/>
		</div>
	)
}
export default DescriptionTextArea

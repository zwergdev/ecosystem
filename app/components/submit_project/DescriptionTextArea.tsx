export default function DescriptionTextArea({
	descValue,
	handleInputChange
}: any) {
	const {length} = descValue

	return (
		<div className='textAreaBox'>
			<label htmlFor='desc' className={descValue && 'toTop'}>
				Project's description
			</label>
			<textarea
				value={descValue}
				name='desc'
				id='desc'
				onChange={e => handleInputChange(e)}
				className={
					length > 400
						? 'resized400'
						: length > 300
						? 'resized300'
						: length > 200
						? 'resized200'
						: length > 100
						? 'resized100'
						: ''
				}
			/>
		</div>
	)
}

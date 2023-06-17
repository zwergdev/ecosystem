const inputs = [
	{name: 'name', type: 'text', placeholder: "Project's name"},
	{name: 'twitter', type: 'url', placeholder: 'Twitter tag'},
	{name: 'discord', type: 'url', placeholder: 'Discord link'},
	{name: 'medium', type: 'url', placeholder: 'Medium/blog link'},
	{name: 'gitbook', type: 'url', placeholder: 'Whitepaper/docs link'},
	{name: 'site', type: 'url', placeholder: 'Website link'},
	{name: 'zealy', type: 'url', placeholder: 'Zealy/Quest3/Galxe etc.'}
]

export default function FormInputs({formValues, handleInputChange}: any) {
	return inputs.map((obj, _idx) => (
		<div className='inputBox'>
			<label
				htmlFor={`${_idx}${obj.name}`}
				className={formValues[obj.name] ? 'typed' : ''}>
				{obj.placeholder}
			</label>
			<input
				onChange={e => handleInputChange(e)}
				autoComplete='off'
				autoCorrect='off'
				id={`${_idx}${obj.name}`}
				key={_idx}
				value={formValues[obj.name]}
				name={obj.name}
				type={obj.type}
			/>
		</div>
	))
}

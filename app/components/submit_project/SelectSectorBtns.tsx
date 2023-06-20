import React, {useContext, useState} from 'react'
import {FormContext} from '@/services/contextAPI'

const selectSectorBtnValues = ['Wallet', 'Media', 'NFT', 'DeFi', 'Marketplace']

const SelectSectorBtns = () => {
	let {formValues, handleInputChange} = useContext(FormContext)
	const [sectorsShowed, setSectorsShowed] = useState(false)
	let sectorValue = formValues.sector

	const calculateHeight = () => {
		if (sectorsShowed) {
			if (sectorValue) {
				return (selectSectorBtnValues.length + 1) * 32
			} else {
				return selectSectorBtnValues.length * 37
			}
		} else {
			return 48.5
		}
	}
	const handleSectorChange = (value: string) => {
		let e = {
			target: {
				name: 'sector',
				value: value
			}
		}
		handleInputChange(e)
	}

	return (
		<div
			style={{height: calculateHeight() + 'px'}}
			className={sectorValue ? 'selectSectorBtn valueIsSelected' : 'selectSectorBtn'}
			onClick={() => setSectorsShowed(!sectorsShowed)}>
			<label className={sectorsShowed || sectorValue ? 'toTop' : ''}>Project's category</label>
			{sectorValue}
			{sectorsShowed &&
				selectSectorBtnValues.map(btnValue =>
					sectorValue === btnValue ? null : (
						<button
							className='selectSectorBtnValue'
							key={btnValue}
							value={btnValue}
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSectorChange(e.currentTarget.value)}>
							{btnValue}
						</button>
					)
				)}
		</div>
	)
}
export default SelectSectorBtns

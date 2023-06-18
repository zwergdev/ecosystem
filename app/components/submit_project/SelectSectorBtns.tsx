import React, {useState} from 'react'
import {formValues} from '@/app/submit/page'

const selectSectorBtnValues = ['Wallet', 'Media', 'NFT', 'DeFi', 'Marketplace']
interface SelectSectorBtns {
	sectorValue: formValues['sector']
	handleSectorChange: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const SelectSectorBtns: React.FC<SelectSectorBtns> = ({sectorValue, handleSectorChange}) => {
	const [sectorsShowed, setSectorsShowed] = useState(false)

	return (
		<button
			className={sectorValue ? 'selectSectorBtn valueIsSelected' : 'selectSectorBtn'}
			onClick={() => setSectorsShowed(!sectorsShowed)}>
			<label className={sectorsShowed || sectorValue ? 'toTop' : ''}>Project's category</label>
			{sectorValue}
			{sectorsShowed &&
				selectSectorBtnValues.map(btnValue => (
					<button
						className={sectorValue === btnValue ? 'selectSectorBtnValue selected' : 'selectSectorBtnValue'}
						key={btnValue}
						value={btnValue}
						onClick={e => handleSectorChange(e)}>
						{btnValue}
					</button>
				))}
		</button>
	)
}
export default SelectSectorBtns

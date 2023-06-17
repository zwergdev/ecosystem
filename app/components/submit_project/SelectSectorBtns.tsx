import {useState} from 'react'
const selectSectorBtnValues = ['Wallet', 'Media', 'NFT', 'DeFi', 'Marketplace']

export default function SelectSectorBtns({
	sectorValue,
	handleSectorChange
}: any) {
	const [sectorsShowed, setSectorsShowed] = useState(false)

	return (
		<button
			className={
				sectorValue ? 'selectSectorBtn valueIsSelected' : 'selectSectorBtn'
			}
			onClick={() => setSectorsShowed(!sectorsShowed)}>
			<label className={sectorsShowed || sectorValue ? 'toTop' : ''}>
				Project's category
			</label>
			{sectorValue}
			{sectorsShowed &&
				selectSectorBtnValues.map(btnValue => (
					<button
						className={
							sectorValue === btnValue
								? 'selectSectorBtnValue selected'
								: 'selectSectorBtnValue'
						}
						key={btnValue}
						value={btnValue}
						onClick={e => handleSectorChange(e)}>
						{btnValue}
					</button>
				))}
		</button>
	)
}

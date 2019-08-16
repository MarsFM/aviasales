import React from 'react'

import './transplant-info.css'

const TransplantInfo = ({ stops }) => {
	let text

	switch (stops) {
		case 0:
			text = <p>Без пересадок</p>
			break
		case 1:
			text = (
				<div>
					<p>1 пересадка</p>
					<hr />
				</div>
			)
			break
		default:
			text = (
				<div>
					<p>{stops} пересадки</p>
					<hr />
				</div>
			)
	}

	return <div className="transplant-info">{text}</div>
}

export default TransplantInfo

import React from 'react'

import './sidebar.css'
import TransplantsContainer from '../transplants'
import CurrencyContainer from '../currency'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<CurrencyContainer />
			<TransplantsContainer />
		</div>
	)
}

export default Sidebar

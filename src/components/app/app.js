import React from 'react'

import './app.css'
import Sidebar from '../sidebar'
import TicketListContainer from '../ticket-list'

const App = () => {
	return (
		<div className="app">
			<div className="app-logo">
				<img src="https://marinarodkin.github.io/aviasales-app/img/logo.png" alt="logo" />
			</div>
			<div className="app_flex">
				<Sidebar />
				<TicketListContainer />
			</div>
		</div>
	)
}

export default App

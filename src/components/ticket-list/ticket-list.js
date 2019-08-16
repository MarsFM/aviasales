import React from 'react'

import TicketListItem from '../ticket-list-item'

import './ticket-list.css'

const TicketList = ({ tickets }) => {
	return (
		<div className="ticket-list">
			{tickets.map((ticket, idx) => {
				return <TicketListItem key={idx} ticket={ticket} />
			})}
		</div>
	)
}

export default TicketList

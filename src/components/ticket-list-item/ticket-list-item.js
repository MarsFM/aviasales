import React from 'react'

import './ticket-list-item.css'
import TripAllInfo from '../trip-all-info'
import TicketPriceContainer from '../ticket-price/ticket-price-container'

const TicketListItem = ({ ticket }) => {
	const {
		origin,
		origin_name,
		destination,
		destination_name,
		departure_date,
		departure_time,
		arrival_date,
		arrival_time,
		carrier,
		stops,
		price,
	} = ticket

	return (
		<div className="ticket-list-item">
			<TicketPriceContainer price={price} />
			<TripAllInfo
				from={origin}
				from_name={origin_name}
				to={destination}
				to_name={destination_name}
				from_date={departure_date}
				from_time={departure_time}
				to_date={arrival_date}
				to_time={arrival_time}
				carrier={carrier}
				stops={stops}
			/>
		</div>
	)
}

export default TicketListItem

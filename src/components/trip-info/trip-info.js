import React from 'react'

import './trip-info.css'

const TripInfo = ({ origin, name, date, time }) => {
	return (
		<div className="trip-info">
			<p className="trip-info__time">{time}</p>
			<p className="trip-info__name">
				{origin}, {name}
			</p>
			<p className="trip-info__date">{date}</p>
		</div>
	)
}

export default TripInfo

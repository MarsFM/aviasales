import React from 'react'

import './trip-all-info.css'
import TripInfo from '../trip-info'
import TransplantInfo from '../transplant-info/transplant-info'

const TripAllInfo = ({
	from,
	from_name,
	to,
	to_name,
	from_date,
	from_time,
	to_date,
	to_time,
	stops,
}) => {
	return (
		<div className="trip-all-info">
			<TripInfo origin={from} name={from_name} date={from_date} time={from_time} />
			<TransplantInfo stops={stops} />
			<TripInfo origin={to} name={to_name} date={to_date} time={to_time} />
		</div>
	)
}

export default TripAllInfo

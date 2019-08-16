import React from 'react'

import './ticket-price.css'

const TicketPrice = ({ price, valueCurrency, currentCurrency }) => {
	const summa = (+price * +valueCurrency).toFixed(0)

	const valuta = () => {
		switch (currentCurrency) {
			case 'RUB':
				return '₽'
			case 'USA':
				return '$'
			case 'EUR':
				return '€'
			default:
				break
		}
	}

	return (
		<div className="ticket-price">
			<div className="ticket-price__logo">
				<img
					className="ticket-price__logo"
					src="https://marinarodkin.github.io/aviasales-app/img/turkish.png"
					alt="Company"
				/>
			</div>
			<button className="ticket-price__btn">
				Купить за <br />
				{valuta() !== '₽' ? `${valuta()} ${summa}` : `${summa} ${valuta()}`}
			</button>
		</div>
	)
}

export default TicketPrice

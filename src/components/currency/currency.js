import React from 'react'

import './currency.css'

const Currency = ({ currencies, onChangeCurrency }) => {
	const currenciesArr = Object.keys(currencies)

	return (
		<div>
			<p className="currency__title">Валюта</p>
			<div className="currency">
				{currenciesArr.map((currency, index) => {
					return (
						<div
							className={`currency__elem currency__elem__${currency.toLowerCase()}`}
							key={index}
						>
							<input
								id={currency}
								className={`currency__input`}
								checked={currencies[currency]}
								onChange={() => onChangeCurrency(currency)}
								type="radio"
								name="currency"
							/>
							<label
								className={`currency__label currency__label__${currency.toLowerCase()}`}
								htmlFor={currency}
							>
								{currency}
							</label>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Currency

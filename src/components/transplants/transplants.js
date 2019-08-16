import React from 'react'

import './transplants.css'

const Transplants = ({ transfers, onChangeTransfer, toggleAllTransfers }) => {
	const isAll = transfers.length === 4 ? true : false
	const isChecked = value => {
		return transfers.indexOf(value) !== -1 ? true : false
	}

	return (
		<div className="transplants">
			<p className="transplants__title">Количество пересадок</p>
			<div>
				<div className="transplants__item">
					<input
						id="allStop"
						className="transplants__input"
						onChange={() => toggleAllTransfers(isAll)}
						checked={isAll}
						type="checkbox"
					/>
					<label className="transplants__label" htmlFor="allStop">
						Все
					</label>
				</div>
				<div className="transplants__item">
					<input
						id="noneStop"
						className="transplants__input"
						onChange={() => onChangeTransfer(0)}
						checked={isChecked(0)}
						type="checkbox"
					/>
					<label className="transplants__label" htmlFor="noneStop">
						Без пересадок
					</label>
				</div>
				<div className="transplants__item">
					<input
						id="oneStop"
						className="transplants__input"
						onChange={() => onChangeTransfer(1)}
						checked={isChecked(1)}
						type="checkbox"
					/>
					<label className="transplants__label" htmlFor="oneStop">
						1 пересадка
					</label>
				</div>
				<div className="transplants__item">
					<input
						id="twoStop"
						className="transplants__input"
						onChange={() => onChangeTransfer(2)}
						checked={isChecked(2)}
						type="checkbox"
					/>
					<label className="transplants__label" htmlFor="twoStop">
						2 пересадки
					</label>
				</div>
				<div className="transplants__item">
					<input
						id="threeStop"
						className="transplants__input"
						onChange={() => onChangeTransfer(3)}
						checked={isChecked(3)}
						type="checkbox"
					/>
					<label className="transplants__label" htmlFor="threeStop">
						3 пересадки
					</label>
				</div>
			</div>
		</div>
	)
}

export default Transplants

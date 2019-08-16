import React, { Component } from 'react'

import { connect } from 'react-redux'

import TicketPrice from './ticket-price'

class TicketPriceContainer extends Component {
	getCurrentCurrency = () => {
		const { currencies } = this.props
		for (const key in currencies) {
			if (currencies[key] === true) {
				return key
			}
		}
	}

	getValueCurrency = () => {
		switch (this.getCurrentCurrency()) {
			case 'RUB':
				return 1
			case 'USA':
				return 1 / 63
			case 'EUR':
				return 1 / 70
			default:
				break
		}
	}

	render() {
		return (
			<TicketPrice
				valueCurrency={this.getValueCurrency()}
				currentCurrency={this.getCurrentCurrency()}
				{...this.props}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		currencies: state.currencies,
	}
}

const mapDispatchToProps = {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TicketPriceContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toogleCurrencyThunk } from '../../reducers/ticket-reducer'
import Currency from './currency'

class CurrencyContainer extends Component {
	onChangeCurrency = name => {
		const { currencies, toogleCurrencyThunk } = this.props
		const newCurrencies = {
			...currencies,
		}
		for (const key in newCurrencies) {
			newCurrencies[key] = false
		}
		newCurrencies[name] = true

		toogleCurrencyThunk(newCurrencies)
	}

	render() {
		return <Currency onChangeCurrency={this.onChangeCurrency} {...this.props} />
	}
}

const mapStateToProps = state => {
	return {
		currencies: state.currencies,
	}
}

const mapDispatchToProps = {
	toogleCurrencyThunk,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrencyContainer)

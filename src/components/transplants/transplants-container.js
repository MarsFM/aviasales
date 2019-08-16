import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	changeTransfers,
	fetchCurrentCategoryTicket,
	toggleAllTransfersThunk,
} from '../../reducers/ticket-reducer'

import Transplants from './transplants'
import './transplants.css'

class TransplantsContainer extends Component {
	onChangeTransfer = transfer => {
		const { transfers, changeTransfers } = this.props

		if (transfers.indexOf(transfer) !== -1) {
			const idx = transfers.findIndex(elem => elem === transfer)
			changeTransfers(undefined, idx)
		} else {
			changeTransfers(transfer)
		}
	}

	toggleAllTransfers = isChecked => {
		if (!isChecked) {
			this.props.toggleAllTransfersThunk([0, 1, 2, 3])
		} else {
			this.props.toggleAllTransfersThunk()
		}
	}

	componentDidUpdate() {
		const { transfers, fetchCurrentCategoryTicket } = this.props
		fetchCurrentCategoryTicket(transfers)
	}

	render() {
		return (
			<Transplants
				toggleAllTransfers={this.toggleAllTransfers}
				onChangeTransfer={this.onChangeTransfer}
				transfers={this.props.transfers}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		transfers: state.transfers,
	}
}

const mapDispatchToProps = {
	changeTransfers,
	fetchCurrentCategoryTicket,
	toggleAllTransfersThunk,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TransplantsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentCategoryTicket } from '../../reducers/ticket-reducer'
import TicketList from './ticket-list'
import Spinner from '../spinner'

class TicketListContainer extends Component {
	componentDidMount() {
		const { transfers } = this.props
		this.props.fetchCurrentCategoryTicket(transfers)
	}

	render() {
		const { tickets, isLoaded } = this.props

		if (!isLoaded) {
			return <Spinner />
		}

		return <TicketList tickets={tickets} />
	}
}

const mapStateToProps = ({ tickets, isLoaded, transfers }) => {
	return {
		tickets,
		isLoaded,
		transfers,
	}
}

const mapDispatchToProps = {
	fetchCurrentCategoryTicket,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TicketListContainer)

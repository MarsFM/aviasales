import TicketService from '../services/ticket-service'

const FETCH_ALL_TICKETS = 'FETCH_ALL_TICKETS'
const LOADED_TICKETS = 'LOADED_TICKETS'
const ADD_TRANSFER = 'ADD_TRANSFER'
const DELETE_TRANSFER = 'DELETE_TRANSFER'
const TOOGLE_ALL_TRANSFER = 'TOOGLE_ALL_TRANSFER'
const TOOGLE_CURRENCY = 'TOOGLE_CURRENCY'

const initialState = {
	tickets: [],
	isLoaded: false,
	transfers: [0],
	currencies: {
		RUB: true,
		USA: false,
		EUR: false,
	},
}

const ticketReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_TICKETS:
			return {
				...state,
				tickets: action.payload,
			}

		case LOADED_TICKETS:
			return {
				...state,
				isLoaded: action.payload,
			}

		case ADD_TRANSFER:
			return {
				...state,
				transfers: [...state.transfers, action.payload],
			}

		case DELETE_TRANSFER:
			return {
				...state,
				transfers: [
					...state.transfers.slice(0, action.payload),
					...state.transfers.slice(action.payload + 1),
				],
			}

		case TOOGLE_ALL_TRANSFER: {
			return {
				...state,
				transfers: action.payload,
			}
		}

		case TOOGLE_CURRENCY:
			return {
				...state,
				currencies: action.payload,
			}

		default:
			return state
	}
}

export const fetchTicketsAC = tickets => {
	return {
		type: FETCH_ALL_TICKETS,
		payload: tickets,
	}
}

export const loadedTickets = () => {
	return {
		type: LOADED_TICKETS,
		payload: true,
	}
}

export const addTransfers = transfer => {
	return {
		type: ADD_TRANSFER,
		payload: transfer,
	}
}

export const deleteTransfers = idx => {
	return {
		type: DELETE_TRANSFER,
		payload: idx,
	}
}

export const toogleAllTransfers = transfers => {
	return {
		type: TOOGLE_ALL_TRANSFER,
		payload: transfers,
	}
}

export const toogleCurrency = currencies => {
	return {
		type: TOOGLE_CURRENCY,
		payload: currencies,
	}
}

export const fetchTickets = () => dispatch => {
	const ticketService = new TicketService()
	ticketService.getAllTeckets(tickets => {
		dispatch(fetchTicketsAC(tickets))
		dispatch(loadedTickets())
	})
}

export const fetchCurrentCategoryTicket = categories => dispatch => {
	const ticketService = new TicketService()
	ticketService.getAllTeckets(tickets => {
		tickets = tickets
			.filter(ticket => categories.indexOf(ticket.stops) !== -1)
			.sort((ticket1, ticket2) => ticket1.price - ticket2.price)

		dispatch(fetchTicketsAC(tickets))
		dispatch(loadedTickets())
	})
}

export const changeTransfers = (transfer, idx) => dispatch => {
	if (transfer !== undefined) {
		dispatch(addTransfers(transfer))
	} else {
		dispatch(deleteTransfers(idx))
	}
}

export const toggleAllTransfersThunk = (transfers = []) => dispatch => {
	dispatch(toogleAllTransfers(transfers))
}

export const toogleCurrencyThunk = currencies => dispatch => {
	dispatch(toogleCurrency(currencies))
}

export default ticketReducer

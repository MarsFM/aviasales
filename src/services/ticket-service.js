class TicketService {
	baseUrl =
		'https://raw.githubusercontent.com/MarsFM/test-tasks/master/aviasales/tickets.json'

	getAllTeckets(handler) {
		fetch(this.baseUrl)
			.then(response => response.json())
			.then(data => handler(data.tickets))
	}
}

export default TicketService

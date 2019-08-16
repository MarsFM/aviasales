import React, { Component } from 'react'

class ErrorBoundary extends Component {
	state = {
		isError: false,
		error: null,
		errorInfo: null,
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			isError: true,
			error: error,
			errorInfo: errorInfo,
		})
	}

	render() {
		if (this.state.isError) {
			return (
				<div>
					<p>Error</p>
					<p>INFO: </p>
					<p>{this.state.error && this.state.error.toString()}</p>
					<p>{this.state.errorInfo.componentStack}</p>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary

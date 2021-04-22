import React from "react";

class ErrorBoundary extends React.Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ textAlign: "center", width: "100%" }}>
					<div style={{ margin: "0 auto", width: "50%", maxWidth: "350px" }}>
						<img src="https://i.imgur.com/A040Lxr.png" alt="error" />
					</div>
					<h4 style={{ margin: "1rem 0" }}>Something Went Wrong !!!</h4>
					<h4>This Page Is Lost In Space !!!</h4>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

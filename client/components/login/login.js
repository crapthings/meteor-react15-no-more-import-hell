Components.Login = class Login extends Component {
	render () {
		return (
			<div>
				<form>
					<input type="text" placeholder="username" />
					<input type="password" placeholder="password" />
					<input type="submit"/>
				</form>
			</div>
		)
	}
}

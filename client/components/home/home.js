Components.Home = class Home extends Component {
	render () {
		return (
			<div>
				<Components.PageTitle title="Home" />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam blanditiis dolores quidem excepturi consequuntur ullam illum veniam, vel voluptate recusandae facere doloribus inventore delectus, repellat temporibus quia. Neque accusantium, sapiente.</p>
				<List />
			</div>
		)
	}
}

class List extends Component {
	render () {
		return (
			<div>
				<ul>
					{this.props.test && this.props.test.map((item, index) => {
						return <li key={index}>{item}</li>
					})}
				</ul>
			</div>
		)
	}
}

List.defaultProps = {
	test: _.range(20000)
}

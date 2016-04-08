Components.AllComponents = class AllComponents extends Component {
	render () {
		let li = function (item, index) {
			item = `<${item} />`;
			return <li key={index}> {item} </li>
		}
		return (
			<div>
				<h3>available components</h3>
				<ul>
					{this.props.components.sort().map(li)}
				</ul>
			</div>
		)
	}
}

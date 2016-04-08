Components.AllComponents = class AllComponents extends Component {

	handleMouseEnter (e) {

		let wow = document.getElementById('wow')

		$(wow).show().css({
			position: 'absolute',
			top: e.clientY - 20,
			left: e.clientX + 80,
			padding: 20,
			width: 480,
			backgroundColor: 'white',
			color: 'red',

			border: '1px solid #efefef',

			// transform: 'scale(.5, .5)'
		})

		let C = Components[e.currentTarget.dataset.test]

		ReactDOM.render(<C />, wow)
	}

	handleMouseLeave () {
		ReactDOM.unmountComponentAtNode(document.getElementById('wow'))

		$('#wow').hide()
	}

	render () {
		let li = (item, index) => {
			wrapItem = `<${item} />`;
			return <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={index} data-test={item}>{wrapItem}</li>
		}

		return (
			<div>
				<h3>available components</h3>
				<ul>
					{this.props.components.sort().filter(function (a) {
						if (a !== 'AllComponents') return true
					}).map(li)}
				</ul>
			</div>
		)
	}

}

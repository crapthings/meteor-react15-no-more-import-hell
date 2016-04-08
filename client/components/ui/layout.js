Components.Layout = class Layout extends Component {

	render () {
		var components = _.keys(Components)
		return (
			<div>
				<Components.Topbar/>
				<Components.Sidebar/>
				<Components.Home/>
				<Components.AllComponents components={components} />
			</div>
		)
	}
}

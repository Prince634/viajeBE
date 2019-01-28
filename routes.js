import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './src/js/container/HomeView.js'
import Profile from './src/js/container/ProfileView.js'

class Routes extends React.Component{

	render(){

		return(
			<Switch>
				<Route exact path = "/" component={Home} />
				<Route path ="/profile" component={Profile} />
			</Switch>
			)
	}
}
export default Routes
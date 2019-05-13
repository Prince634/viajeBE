import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable';

const LoadingComponent = () => <h3>please wait...</h3>;


const HomeView = loadable({
	loader: () => import('./src/js/container/HomeView.js'),
	loading: LoadingComponent
})

const ProfileView = loadable({
	loader: () => import('./src/js/container/ProfileView.js'),
	loading: LoadingComponent
})

class Routes extends React.Component{

	render(){

		return(
			<Switch>
				<Route exact path = "/" component={HomeView} />
				<Route exact path ="/profile" component={ProfileView} />
			</Switch>
			)
	}
}
export default Routes
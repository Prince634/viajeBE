import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../App.js'

class Main extends React.Component{

	render(){

		return(
			<BrowserRouter>
				<App/>
			</BrowserRouter>
			)
	}
}
ReactDom.render(<Main/>,document.getElementById('app'))
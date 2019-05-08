import React from 'react'
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom'
//import './src/js/style.css'
class App extends React.Component{

	render(){
		
		return(
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			)
	}
}

export default App
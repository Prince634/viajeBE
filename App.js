import React from 'react'
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/js/reducers/index.js'
//import './src/js/style.css'
class App extends React.Component{

	render(){
		let store = createStore(reducers)
		return(
			<Provider store = {store}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</Provider>
			)
	}
}

export default App
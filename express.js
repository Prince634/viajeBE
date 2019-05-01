const express = require('express')
/*import React from 'react'
import App from './src/index.js'
import { renderToString } from 'react-dom/server';
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
*/
const port = 4000
const server = express()
const path = require('path')

server.get('/*', (req, res) => {
	/*let store = createStore( )
	let context = {}
	let jsx = (
		<Provider store = {store}>
			<BrowserRouter context= {context} location = {req.url}>
				<Routes/>
			</BrowserRouter>
		</Provider>
		)
	const body = renderToString(jsx)

	res.writeHead(200, {"Content-Type": "text/html"})
	res.send(htmlTemplate(body))
*/

 console.log(__dirname)
 res.sendFile(path.join(__dirname, 'server.html'))

})
 console.log(`Server listen at http://localhost:${port}`)
server.listen(port)


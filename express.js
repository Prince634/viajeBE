import express from 'express'
import React from 'react'
import App from '/src/index.js'
import { renderToString } from 'react-dom/server';

const port = 3000
const server = express()

server.get('/', (req, res) => {
	const body = renderToString(<App/>)

	res.send(body)


})

server.listen(port)
console.log(`Server listen at http://localhost:${port}`)
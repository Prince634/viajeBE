const express = require('express')

const app = express()

const path = require('path')


/*import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Routes from './routes.js'
*/

app.set('views', path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist')));

app.all('*', function(req, res) {

	res.render(path.join(__dirname, 'dist', 'index.ejs'), {metaData:'Im prince'})
})

// Serve the files on port 3000.
app.listen(4000, function () {
  console.log('Example app listening on port 4000!\n');
});
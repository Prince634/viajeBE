const express = require('express')

const app = express()

const path = require('path')


app.all('*', function(req, res) {
	res.render(path.join(__dirname, 'dist', 'index.ejs'))
})

// Serve the files on port 3000.
app.listen(4000, function () {
  console.log('Example app listening on port 4000!\n');
});
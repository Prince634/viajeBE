// import React from 'react'
// import ReactDom from 'react-dom'
// import App from '../App.js'

// class Main extends React.Component{

// 	render(){alert('bb')

// 		return(
// 				<App/>
// 			)
// 	}
// }
// ReactDom.render(<Main/>,document.getElementById('app'))
import './style.css'
import Images from '../src/images/b2.jpeg'
import Html from './print.js'
import _ from 'lodash';
import React from 'react'
import ReactDom from 'react-dom'
import App from '../App.js'

function component(){
	
	var btn = document.createElement("BUTTON");   // Create a <button> element
	btn.innerHTML = _.join(['Hello', 'webpack'], ' ');
	btn.onclick = 'text';

	var x = document.createElement("IMG");
	x.src = Images

	btn.appendChild(Html)
/*
	btn.appendChild(x)
	console.log(x)*/
	return btn
}	

class Main extends React.Component {
	render(){

		return(
			<div>
				<Html/>
				<p>I m Prince</p>
			</div>
			)
	}

}

ReactDom.render(<App/>,document.getElementById('app'))

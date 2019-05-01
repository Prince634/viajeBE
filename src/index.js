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
import text from './print.js'

function component(){
	
	var btn = document.createElement("BUTTON");   // Create a <button> element
	btn.innerHTML = "Hey CLICK ME";  
	btn.onclick = text;

	var x = document.createElement("IMG");
	x.src = Images
/*
	btn.appendChild(x)
	console.log(x)*/
	return btn
}	

document.body.appendChild(component());

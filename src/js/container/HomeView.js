import React from 'react'

class Home extends React.Component{

	render(){

		return(
			<div>
				<p>Home Page</p>
				<button onClick={()=>this.props.history.push('/profile')}>Go To Profile</button>
			</div>
			)
	}
}

export default Home
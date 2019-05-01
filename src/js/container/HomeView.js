import React from 'react'
import { connect } from 'react-redux'
import { getInitialData } from '../action/index.js'


class Home extends React.Component{

	render(){
		console.log('aaaaaaaaaaaaaaaaa');console.log(this.props)
		return(
			<div>
				<p>Home Page</p>
				<button className="colr" onClick={()=>this.props.history.push('/profile')}>Go To Profile</button>
			</div>
			)
	}
}

function mapState(state){
	const {
		data
	} = state.USER

	return{
		data
	}
}

function mapDispatchToProps(dispatch) {
  return {
    getInitialData: () => dispatch(getInitialData())
  }
}

export default connect(mapState, mapDispatchToProps)(Home)
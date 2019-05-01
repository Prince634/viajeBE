import { LOAD_INITIAL_DATA } from '../helpers/type.js'

const defaultState = {
	data: {'abc':'hello'}
}

export default function (state = defaultState, action){

	switch(action.type){

		case 'LOAD_INITIAL_DATA' : {
			let newState = {
				...state
			}
			console.log('Reached reducerrrrrrrr')
			return newState
		}
		return state
	}
}
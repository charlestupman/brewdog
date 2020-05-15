import { combineReducers } from "redux"
import { reducerFactory } from "../factories/index"
import { BEERS_GET, BEERS_GET_STEAK, BEERS_GET_PIZZA, BEERS_GET_MORE } from './action-types'

const initialState = {
	beersPage: 1,
}

const beersPage = (state = initialState, action) => {
	switch (action.type) {
		case BEERS_GET_MORE: {
			return {
				...state,
				beersPage: state.beersPage + 1
			}
		}
		default: return state
	}
}


export const reducer = combineReducers({
	beersPage,
	allBeers: reducerFactory(BEERS_GET),
	pizzaBeers: reducerFactory(BEERS_GET_PIZZA),
	steakBeers: reducerFactory(BEERS_GET_STEAK)
})
import { combineReducers } from "redux"
import { reducerFactory } from "../factories/index"
import { BEERS_GET, BEERS_GET_STEAK, BEERS_GET_PIZZA } from './action-types'


export const reducer = combineReducers({
	allBeers: reducerFactory(BEERS_GET),
	pizzaBeers: reducerFactory(BEERS_GET_PIZZA),
	steakBeers: reducerFactory(BEERS_GET_STEAK)
})
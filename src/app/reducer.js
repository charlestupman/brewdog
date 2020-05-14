import { combineReducers } from "redux"
import { reducerFactory } from "./domain/factories"
import { beers } from "./domain"

const { BEERS_GET } = beers.actionTypes

export const reducer = combineReducers({
	domain: combineReducers({
		allBeers: reducerFactory(BEERS_GET),
	})
})

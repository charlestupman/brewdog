import { combineReducers } from "redux"
import { reducerFactory } from "./domain/factories"
import { beers } from "./domain"

const { BEERS_GET } = beers.actionTypes

export const store = combineReducers({
	domain: combineReducers({
		beers: reducerFactory(BEERS_GET),
	})
})

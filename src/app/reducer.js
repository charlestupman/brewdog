import { combineReducers } from "redux"
import { reducer as beersReducer } from "../domain/beers"
import { reducer as appReducer } from './redux'


export const reducer = combineReducers({
	app: appReducer,
	domain: beersReducer,
})

import { createStore } from 'redux'
import { reducer } from './app/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(reducer, composeWithDevTools())
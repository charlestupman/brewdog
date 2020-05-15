import { path } from 'ramda'

export const footerActive = state =>
	path(['app', 'footerActive'], state)

export const cart = state =>
	path(['app', 'cart'], state)

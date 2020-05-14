import { path } from 'ramda'

export const allBeers = (state) =>
	path(['domain', 'allBeers'], state)

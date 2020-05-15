import { path } from 'ramda'

export const allBeers = (state) =>
	path(['domain', 'allBeers'], state)

export const pizzaBeers = (state) =>
	path(['domain', 'pizzaBeers'], state)

export const steakBeers = (state) =>
	path(['domain', 'steakBeers'], state)

export const beersPage = (state) =>
	path(['domain', 'beersPage', 'beersPage'], state)

import { path } from 'ramda'

export const currentSlide = state =>
	path(['app', 'currentSlide'], state)

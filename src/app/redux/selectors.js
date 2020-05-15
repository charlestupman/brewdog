import { path } from 'ramda'

export const footerActive = state =>
	path(['app', 'footerActive'], state)

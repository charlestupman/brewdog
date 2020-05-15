import { TOGGLE_FOOTER } from './action-types'

const initialState = {
	footerActive: false,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOOTER: {
			return {
				...state,
				footerActive: action.payload ? action.payload : !state.footerActive,
			}
		}
		default:
			return state
	}
}

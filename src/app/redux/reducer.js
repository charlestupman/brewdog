import { TOGGLE_FOOTER, ADD_TO_CART, REMOVE_FROM_CART } from './action-types'

const initialState = {
	cart: [],
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
		case ADD_TO_CART: {
			return {
				...state,
				cart: [ ...state.cart, action.payload ]
			}
		}
		case REMOVE_FROM_CART: {
			return {
				...state,
			}
		}
		default:
			return state
	}
}

import { SET_CURRENT_SLIDE } from './action-types'

const initialState = {
	currentSlide: 0,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_SLIDE: {
			return {
				...state,
				currentSlide: action.payload,
			}
		}
		default:
			return state
	}
}

import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_FOOTER } from './action-types'

export const toggleFooter = (payload) => ({
	type: TOGGLE_FOOTER,
	payload
})

export const addToCart = (payload) => ({
	type: ADD_TO_CART,
	payload,
})

export const removeFromCart = (payload) => ({
	type: REMOVE_FROM_CART,
	payload,
})

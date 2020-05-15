import { apiAction } from '../factories/index'
import { BREWDOG_API } from '../urls'
import { BEERS_GET, BEERS_GET_PIZZA, BEERS_GET_STEAK } from './action-types'
import { addParamsToUrl } from '../services/index'


const getBeersUrl = BREWDOG_API + 'beers'

const pizzaParams = {
	food: 'pizza',
}

const steakParams = {
	food: 'steak',
}

export const beersGet = (dispatch) => apiAction(dispatch, BEERS_GET, getBeersUrl)

export const beersGetPizza = (dispatch) => apiAction(dispatch, BEERS_GET_PIZZA, addParamsToUrl(getBeersUrl, pizzaParams))

export const beersGetSteak = (dispatch) => apiAction(dispatch, BEERS_GET_STEAK, addParamsToUrl(getBeersUrl, steakParams))

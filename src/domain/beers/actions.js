import { apiAction } from '../factories/index'
import { BREWDOG_API } from '../urls'
import { BEERS_GET, BEERS_GET_PIZZA, BEERS_GET_STEAK, BEERS_GET_MORE } from './action-types'
import { addParamsToUrl } from '../services/index'


const getBeersUrl = BREWDOG_API + 'beers'

const pizzaParams = {
	food: 'pizza',
}

const steakParams = {
	food: 'steak',
}

export const beersGet = (dispatch, params) => {
	dispatch({
		type: BEERS_GET_MORE,
	})
	apiAction(dispatch, BEERS_GET, addParamsToUrl(getBeersUrl, params))
	apiAction(dispatch, BEERS_GET_PIZZA, addParamsToUrl(getBeersUrl, { ...pizzaParams, ...params }))
	apiAction(dispatch, BEERS_GET_STEAK, addParamsToUrl(getBeersUrl, { ...steakParams, ...params }))
}


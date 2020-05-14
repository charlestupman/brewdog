import { apiAction } from '../factories/index'
import { BREWDOG_API } from '../urls'
import { BEERS_GET } from './action-types'


const getBeersUrl = BREWDOG_API + 'beers'

export const beersGet = (dispatch) =>
	apiAction(dispatch, BEERS_GET, getBeersUrl)
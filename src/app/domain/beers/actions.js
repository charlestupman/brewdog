import { apiAction } from '../factories/index'
import { BREWDOG_API } from '../urls'


export const beersGet = (dispatch) =>
	apiAction(dispatch, BREWDOG_API)
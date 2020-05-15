import { connect } from 'react-redux'
import { Items } from './items'
import { beersGet, beersGetPizza, beersGetSteak  } from 'domain/beers/actions'

const mapDispatchToProps = dispatch => ({
	getBeers: () => {
		beersGet(dispatch)
		beersGetPizza(dispatch)
		beersGetSteak(dispatch)
	},
})

export const ItemsConnected = connect(null, mapDispatchToProps)(Items)

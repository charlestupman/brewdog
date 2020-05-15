import { connect } from 'react-redux'
import { Items } from './items'
import { actions } from 'domain/beers'

const { beersGet } = actions

const mapDispatchToProps = dispatch => ({
	getBeers: () => beersGet(dispatch),
 })

export const ItemsConnected = connect(null, mapDispatchToProps)(Items)

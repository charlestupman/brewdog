import { connect } from 'react-redux'
import { Items } from './items'
import { beersGet } from 'app/domain/beers/actions'

const mapDispatchToProps = dispatch => ({
		getBeers: () => beersGet(dispatch)
})

export const ItemsConnected = connect(null, mapDispatchToProps)(Items)

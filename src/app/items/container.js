import { connect } from 'react-redux'
import { Items } from './items'
import { beersGet } from 'app/domain/beers/actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
		getBeers: beersGet(dispatch)
})

export const ItemsConnected = connect(mapStateToProps, mapDispatchToProps)(Items)

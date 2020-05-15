import { connect } from 'react-redux'
import { List } from './list'
import { cart } from '../../../redux/selectors'
import { removeFromCart } from '../../../redux/actions'

const mapStateToProps = state => ({
	cart: cart(state)
})

const mapDispatchToProps = dispatch => ({
	removeFromCart: (item) => dispatch(removeFromCart(item))
})

export const ListConnected = connect(mapStateToProps, mapDispatchToProps)(List)

import { connect } from 'react-redux'
import { Price } from './price'
import { cart } from '../../../redux/selectors'

const reducePrice = (items) => {
	return items.reduce((acc, item) => {
		return acc + item.abv
	}, 0)
}

const mapStateToProps = state => ({
    price: reducePrice(cart(state))
})


export const PriceConnected = connect(mapStateToProps)(Price)

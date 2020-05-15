import { connect } from 'react-redux'
import { Carousel } from './carousel'
import { selectors, actions } from 'domain/beers'
import { addToCart } from 'app/redux/actions'

const mapStateToProps = state => ({
 allBeers: selectors.allBeers(state),
 pizzaBeers: selectors.pizzaBeers(state),
 steakBeers: selectors.steakBeers(state)
})

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item)),
})

export const CarouselConnected = connect(mapStateToProps, mapDispatchToProps)(Carousel)

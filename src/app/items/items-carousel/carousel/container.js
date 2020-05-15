import { connect } from 'react-redux'
import { Carousel } from './carousel'
import { selectors } from 'domain/beers'

const mapStateToProps = state => ({
 allBeers: selectors.allBeers(state),
 pizzaBeers: selectors.pizzaBeers(state),
 steakBeers: selectors.steakBeers(state)
})

export const CarouselConnected = connect(mapStateToProps)(Carousel)

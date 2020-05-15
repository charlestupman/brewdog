import { connect } from 'react-redux'
import { ItemsCarousel } from './items-carousel'
import { selectors } from 'domain/beers'

const mapStateToProps = state => ({
 allBeers: selectors.allBeers(state),
 pizzaBeers: selectors.pizzaBeers(state),
 steakBeers: selectors.steakBeers(state)
})

export const ItemsCarouselConnected = connect(mapStateToProps)(ItemsCarousel)

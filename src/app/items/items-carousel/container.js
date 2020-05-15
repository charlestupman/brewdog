import { connect } from 'react-redux'
import { ItemsCarousel } from './items-carousel'
import { actions, selectors  } from 'domain/beers'

const { beersGet } = actions

const { beersPage, allBeers } = selectors

const mapStateToProps = state => ({
	allBeers: allBeers(state),
	page: beersPage(state)
})

const mapDispatchToProps = dispatch => ({
	getMoreBeers: (page) => beersGet(dispatch, { page: page })
})
export const ItemsCarouselConnected = connect(mapStateToProps, mapDispatchToProps)(ItemsCarousel)

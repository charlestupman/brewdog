import { connect } from 'react-redux'
import { AllBeers } from './all-beers'
import { beers } from 'app/domain'

const { selectors } = beers

const mapStateToProps = state => ({
 allBeers: selectors.allBeers(state)
})

export const AllBeersConnected = connect(mapStateToProps)(AllBeers)

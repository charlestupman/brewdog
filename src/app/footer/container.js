import { connect } from 'react-redux'
import { Footer } from './footer'

import { actions, selectors } from 'app/redux'


const mapStateToProps = state => ({
    active: selectors.footerActive(state)
})

const mapDispatchToProps = dispatch => ({
	toggleFooter: () => dispatch(actions.toggleFooter())
})

export const FooterConnected = connect(mapStateToProps, mapDispatchToProps)(Footer)

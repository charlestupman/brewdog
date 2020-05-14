import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ItemsMenu } from './items-menu'
import { ItemsCarousel } from './items-carousel'

export const Items = ({ getBeers }) => {

	getBeers()

	return (
		<Fragment>
			<ItemsMenu />
			<ItemsCarousel/>
		</Fragment>
	)
}


Items.propTypes = {
	getBeers: PropTypes.func,
}
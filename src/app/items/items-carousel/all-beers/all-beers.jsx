import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Item } from 'app/components'
import styles from './all-beers.module.scss'

export const AllBeers = ({ allBeers }) =>
	<ul className={styles.items}>
		{allBeers.map(beer =>
			<li>
				<Item {...beer} />
			</li>
		)}
	</ul>

AllBeers.propTypes = {
	allBeers: PropTypes.array,
}
import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'app/components'
import styles from './items.module.scss'

export const Items = ({ items, addToCart }) =>
	<ul className={styles.items}>
		{items.map(item =>
			<li>
				<Item item={item} addToCart={addToCart} />
			</li>
		)}
	</ul>

Items.propTypes = {
	items: PropTypes.array,
	addToCart: PropTypes.func,
}
import React from 'react'
import PropTypes from 'prop-types'

import styles from './expanded.module.scss'

export const Expanded = ({ item, addToCart }) =>
	<div className={styles.expanded}>
		<div className={styles.description}>
			<img src={item.image_url} alt={item.name}/>
			<ul>
				<li>
					name: {item.name}
				</li>
				<li>
					tagline: {item.tagline}
				</li>
				<li>
					abv: {item.abv}
				</li>
				<li>
					description: {item.description}
				</li>
				<li>
					food pairing: {item.food_pairing}
				</li>
			</ul>
		</div>
		<button onClick={() => addToCart(item)}>Add to cart</button>
	</div>

Expanded.propTypes = {
	item: PropTypes.object,
	addToCart: PropTypes.func,
}
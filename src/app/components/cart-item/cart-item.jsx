import React from 'react'
import PropTypes from 'prop-types'

import styles from './cart-item.module.scss'


export const CartItem = ({ item, removeFromCart }) =>
	<ul className={styles.cartItem}>
		<li>
			<img src={item.image_url} alt={item.name}/>
		</li>
		<li>
			{item.name}
		</li>
		<li>
			{item.abv}
		</li>
		<li>
			<button onClick={() => removeFromCart(item)} >Remove</button>
		</li>
	</ul>

CartItem.propTypes = {
	item: PropTypes.object,
	removeFromCart: PropTypes.func,
}
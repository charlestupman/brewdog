import React from 'react'
import PropTypes from 'prop-types'
import styles from './list.module.scss'


import { CartItem } from 'app/components'

export const List = ({ cart, removeFromCart }) =>
	<ul className={styles.list}>
		{cart.map((item, index) =>
			<li>
				<CartItem item={item} removeFromCart={removeFromCart} index={index} />
			</li>
		)}
	</ul>

List.propTypes = {
	cart: PropTypes.array,
	removeFromCart: PropTypes.func,
}
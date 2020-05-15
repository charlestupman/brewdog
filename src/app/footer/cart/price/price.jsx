import React from 'react'
import PropTypes from 'prop-types'

import styles from './price.module.scss'


export const Price = ({ price = 0 }) =>
	<div className={styles.price}>
		Total Price: {price}
	</div>

Price.propTypes = {
	price: PropTypes.number,
}
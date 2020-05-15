import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'app/components'
import styles from './items.module.scss'

export const Items = ({ items }) =>
	<ul className={styles.items}>
		{items.map(beer =>
			<li>
				<Item {...beer} />
			</li>
		)}
	</ul>

Items.propTypes = {
	items: PropTypes.array,
}
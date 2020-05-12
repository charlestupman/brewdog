import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './items-menu.module.scss'


const itemCategories = [
	'all', 'pizza', 'steak'
]

export const ItemsMenu = ({ selectedItems = 'all' }) =>
	<ul className={styles.itemsMenu}>
		{itemCategories.map(item =>
			<li className={selectedItems === item ? styles.selected : ''}>
				{item}
			</li>
		)}
	</ul>

ItemsMenu.propTypes = {
	selectedItems: PropTypes.string,
}
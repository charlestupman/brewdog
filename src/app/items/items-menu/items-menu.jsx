import React from 'react'
import styles from './items-menu.module.scss'
import { Dot } from 'pure-react-carousel'

const itemCategories = [
	'all', 'pizza', 'steak'
]

export const ItemsMenu = () =>
	<ul className={styles.itemsMenu}>
		{itemCategories.map((item, index) =>
			<Dot slide={index}>
				{item}
			</Dot>
		)}
	</ul>

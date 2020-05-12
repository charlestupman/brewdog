import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUtensils, faPercentage, faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './icon-menu.module.scss'

export const IconMenu = ({}) =>
	<ul className={styles.iconMenu}>
		<li className={styles.selectedIcon}>
			<FontAwesomeIcon icon={faCoffee} size={'3x'} color={'white'}/>
		</li>
		<li>
			<FontAwesomeIcon icon={faUtensils} size={'3x'} color={'white'}/>
		</li>
		<li>
			<FontAwesomeIcon icon={faPercentage} size={'3x'} color={'white'}/>
		</li>
		<li>
			<FontAwesomeIcon icon={faSearch} size={'3x'} color={'white'}/>
		</li>
	</ul>

IconMenu.propTypes = {

}
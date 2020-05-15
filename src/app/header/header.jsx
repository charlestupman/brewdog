import React from 'react'
import { Title } from './title'
import { IconMenu } from './icon-menu'
import styles from './header.module.scss'

export const Header = () =>
	<div className={styles.header}>
		<Title />
		<IconMenu/>
	</div>

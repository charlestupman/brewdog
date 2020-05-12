import React, { Fragment } from 'react'
import { APP_TITLE } from './constants'
import styles from './title.module.scss'


export const Title = ({}) =>
	<h1 className={styles.title}>
		{APP_TITLE}
	</h1>

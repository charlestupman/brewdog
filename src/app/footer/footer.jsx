import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Tab } from './tab'

import styles from './footer.module.scss'
import { Cart } from './cart'

export const Footer = ({ active, toggleFooter }) =>
	<div className={`${styles.footerWrapper} ${active ? styles.active : ''}`}>
		<div className={styles.footer}>
			<Tab toggleFooter={toggleFooter} />
			<Cart />
		</div>
	</div>

Footer.propTypes = {
	active: PropTypes.bool,
}
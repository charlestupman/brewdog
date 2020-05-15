import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Tab } from './tab'

import styles from './footer.module.scss'

export const Footer = ({ active, toggleFooter }) =>
	<div className={`${styles.footerWrapper} ${active ? styles.active : ''}`}>
		<div className={styles.footer}>
			<Tab toggleFooter={toggleFooter} />
		</div>
	</div>

Footer.propTypes = {
	active: PropTypes.bool,
}
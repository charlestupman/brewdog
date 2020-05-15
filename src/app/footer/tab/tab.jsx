import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './tab.module.scss'


export const Tab = ({ toggleFooter }) =>
	<div className={styles.tab} onClick={toggleFooter}>
		Shopping Cart
	</div>

Tab.propTypes = {
	toggleFooter: PropTypes.func,
}
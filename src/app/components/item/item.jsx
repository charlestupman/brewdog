import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import styles from './item.module.scss'

export const Item = ({ image_url, name }) =>
	<div className={styles.item}>
		<div className={styles.imageWrapper}>
			<img src={image_url} />
		</div>
		<div className={styles.label}>
			{name}
		</div>
	</div>

Item.propTypes = {
	image_url: PropTypes.string,
}
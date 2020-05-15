import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './item.module.scss'
import { Popup } from '../popup'
import { Expanded } from './expanded'

export const Item = ({ item, addToCart }) => {
	const [ popupActive, setPopupActive ] = useState(false)

	return (
		<Fragment>
			<div className={styles.item} onClick={() => setPopupActive(true)}>
				<div className={styles.imageWrapper}>
					<img src={item.image_url} />
				</div>
				<div className={styles.label}>
					{item.name}
				</div>
			</div>
			<Popup
				active={popupActive}
				setPopupActive={setPopupActive}
				content={<Expanded item={item} addToCart={addToCart}/>}
			/>
		</Fragment>
	)
}


Item.propTypes = {
	addToCart: PropTypes.func,
	item: PropTypes.object,
}
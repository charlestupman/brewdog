import React, { useRef, useEffect, useState } from 'react'
import { Items } from 'app/components'

import styles from './items-carousel.module.scss'

import PropTypes from 'prop-types'
import { Carousel } from './carousel'

export const ItemsCarousel = ({ page, getMoreBeers, allBeers }) => {
	const [ shouldPaginate, setShouldPaginate ] = useState(true)

	const paginateEl = useRef(null)

	useEffect(() => {
		setShouldPaginate(true)
	}, [allBeers])


	const paginate = () => {
		const height = paginateEl.current.scrollHeight
		const currentScroll = paginateEl.current.scrollTop
		if(currentScroll > height / 3) {
			if (shouldPaginate) {
				getMoreBeers(page)
				setShouldPaginate(false)
			}
		}
	}


	return (
		<div className={styles.carouselWrapper} ref={paginateEl} onScroll={paginate}>
			<Carousel />
		</div>
	)
}


ItemsCarousel.propTypes = {
	getMoreBeers: PropTypes.func,
	page: PropTypes.number,
}
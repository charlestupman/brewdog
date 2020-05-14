import React from 'react'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

import { AllBeers } from './all-beers'

import styles from './items-carousel.module.scss'

import PropTypes from 'prop-types'

export const ItemsCarousel = ({ selectedItems = 'all' }) =>
	<CarouselProvider naturalSlideHeight={500} naturalSlideWidth={100} dragEnabled touchEnabled totalSlides={3}>
		<Slider className={styles['items-carousel']}>
			<Slide number={0}>
				<AllBeers/>
			</Slide>
			<Slide number={1}>
				<AllBeers/>
			</Slide>
			<Slide number={2}>
				<AllBeers/>
			</Slide>
		</Slider>
	</CarouselProvider>

ItemsCarousel.propTypes = {
	selectedItems: PropTypes.string,
}
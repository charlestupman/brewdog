import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ItemsMenu } from './items-menu'
import { ItemsCarousel } from './items-carousel'
import { CarouselProvider } from 'pure-react-carousel'

export const Items = ({ getBeers, setCurrentSlide, currentSlide }) => {

	useEffect(() => {
		getBeers()
	}, [])

	return (
		<CarouselProvider
			naturalSlideHeight={500}
			naturalSlideWidth={100}
			dragEnabled
			touchEnabled
			totalSlides={3}
		>
			<ItemsMenu setCurrentSlide={setCurrentSlide} currentSlide={currentSlide}/>
			<ItemsCarousel setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
		</CarouselProvider>
	)
}


Items.propTypes = {
	getBeers: PropTypes.func,
	setCurrentSlide: PropTypes.func,
	currentSlide: PropTypes.number,
}
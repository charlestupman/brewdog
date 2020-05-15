import React from 'react'
import { Slide, Slider } from 'pure-react-carousel'
import { Items } from 'app/components'

import styles from './carousel.module.scss'

import PropTypes from 'prop-types'

export const Carousel = ({ allBeers, pizzaBeers, steakBeers, addToCart }) =>
		<Slider className={styles['items-carousel']}>
			<Slide number={0} >
				<Items items={allBeers} addToCart={addToCart}/>
			</Slide>
			<Slide number={1}>
				<Items items={pizzaBeers} addToCart={addToCart}/>
			</Slide>
			<Slide number={2}>
				<Items items={steakBeers} addToCart={addToCart}/>
			</Slide>
		</Slider>

Carousel.propTypes = {
	selectedItems: PropTypes.string,
	allBeers: PropTypes.array,
	pizzaBeers: PropTypes.array,
	steakBeers: PropTypes.array,
	setCurrentSlide: PropTypes.func,
	addToCart: PropTypes.func,
}
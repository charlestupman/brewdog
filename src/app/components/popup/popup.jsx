import React from 'react'
import PropTypes from 'prop-types'
import { Dialog } from '../dialog'

export const Popup = ({ active, setPopupActive, content }) =>
	<Dialog active={active} setPopupActive={setPopupActive} content={content} />

Popup.propTypes = {
	item: PropTypes.object
}
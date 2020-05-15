import React, { Fragment } from 'react'
import MuDialog from "@material-ui/core/Dialog"
import PropTypes from 'prop-types'

export const Dialog = ({ active, title, content, setPopupActive }) =>
	<MuDialog open={active} title={title} onClose={() => setPopupActive(false)}>
		{content}
	</MuDialog>

Dialog.propTypes = {
	active: PropTypes.bool,
	title: PropTypes.string,
	content: PropTypes.element,

}
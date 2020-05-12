import React from 'react'
import styles from './app.module.scss'
import { Header } from './header'
import { Items } from './items'
import { Provider } from 'react-redux'
import { store } from '../store'

export const App = () =>
	<Provider store={store}>
		<div className={styles.appWrapper}>
			<div className={styles.app}>
				<Header/>
				<Items/>
			</div>
		</div>
	</Provider>

import React from 'react'
import HeaderAndFooterInfo from './HeaderAndFooterInfo'
import { Container } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<HeaderAndFooterInfo />

				<div className='footer__line'></div>

				<p className='footer__text'>Хочешь такой же сайт? Переходи на <a href='#'>наш сайт</a> </p>
			</Container>
		</footer>
	)
}

export default Footer
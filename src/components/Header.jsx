import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderAndFooterInfo from './HeaderAndFooterInfo';

const Header = () => {
	return (
		<header className='header'>
			<Container>
				<HeaderAndFooterInfo />
			</Container>
		</header>
	)
}

export default Header
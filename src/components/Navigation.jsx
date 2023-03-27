import React from 'react'
import { Container } from 'react-bootstrap'


const Navigation = () => {

	return (
		<nav className='nav'>
			<Container className='d-flex justify-content-between'>
				<a href='#'>Каталог вакансий</a>

				<a href='#'>Визы и приглашения на работу</a>

				<a href='#'>Для партнеров</a>

				<a href='#'>Вопросы</a>

				<a href='#'>Блог</a>
			</Container>
		</nav >
	)
}

export default Navigation
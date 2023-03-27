import React from 'react'
import { Container } from 'react-bootstrap'
import people from '../images/people.png'
import Consultation from './Consultation'

const Main = () => {
	return (
		<section className='main'>
			<Container>
				<div className="main__wrapper">
					<h1 className='main__title'>
						Легальная работа в ЕС — официальное трудоустройство в течении 1-3 рабочих дней
					</h1>
					<img src={people} alt='' className='main__img' />
					<div className='consultation__req'>
						<Consultation />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Main
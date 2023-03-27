import React from 'react'
import { Container } from 'react-bootstrap'
import Consultation from './Consultation'
import tgImage from '../images/subscribe-tg.png'

const Subscribe = () => {
	return (
		<section className='subscribe'>
			<Container>
				<h2 className='subscribe__title'>Подписывайтесь на наш телеграмм канал, там мы выкладываем новые вакансии в ЕС</h2>

				<div className='subscribe__wrapper'>
					<div className='subscribe__tg'>
						<img src={tgImage} alt='' />
						<button>Подписаться на телеграмм</button>
					</div>
					<div className='subscribe__req'>
						<Consultation />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Subscribe
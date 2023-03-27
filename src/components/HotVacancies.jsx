import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Selector from './Selector';
import Input from './Input';
import HotVacanciesSlider from './Slider';

const HotVacancies = () => {
	const [name, setName] = useState('');
	const [selected, setSelected] = useState();

	const clearInputs = () => {
		setName('')
		setSelected('')
	}

	const handleSumbit = (e) => {
		e.preventDefault();

		const newObj = {
			user: name,
			connection: selected,
		}

		console.log(newObj)
		clearInputs()
	}

	return (
		<section className='hotVacancies'>

			<Container>
				<h2 className='hotVacancies__title'>Горящие вакансии</h2>
				<h4 className='hotVacancies__subtitle'>осталось 1-5 рабочих мест</h4>

				<div className='hotVacancies__slider'>
					<HotVacanciesSlider />
				</div>

				<div className='hotVacancies__search'>
					<h4>Не нашли нужной вам вакансии?</h4>
					<h5>Напишите нашему менеджеру в один из удобных для вас месенджеров и мы подберём под вас топ вакансий из базы</h5>

					<form id="reqForm" className='consultation__req-form'>
						<Input
							value={name}
							onChange={(e) => setName(e.target.value)} />

						<Selector
							onChange={(e) => setSelected(e.target.value)}
							value={selected} />

						<button onClick={handleSumbit}>Отправить</button>
					</form>
				</div>
			</Container>

		</section>
	)
}

export default HotVacancies
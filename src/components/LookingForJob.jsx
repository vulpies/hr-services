import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Loupe } from '../svg/index'
import { searcVacanciesData } from '../mocks/SearchVacanciesData'
import Selector from "./Selector"
import AccordionCommon from './Accordion'
import RadioBtn from './RadioBtn'
import { availableVacancies } from '../mocks/AvailableVacancies'

const LookingForJob = () => {
	const [search, setSearch] = useState('')

	const [radioPayment, setRadioPayment] = useState('3euro');
	const [radioHours, setRadioHours] = useState('3hours');
	const [radioSchedule, setRadioSchedule] = useState('5-2');
	const [radioCountry, setRadioCountry] = useState('poland');

	const [show, setShow] = useState(true)
	const [initialCount, setInitialCount] = useState(4)

	const handleSearch = () => {
		console.log(search)
	}

	const handleShow = (data) => {
		if (data.length > initialCount) {
			setInitialCount(count => count + 3)
			setShow(false)
		} else {
			setShow(true)
		}
	}

	return (
		<section className='lookingForJob'>
			<Container>
				<h2>Ищете работу в ЕС?</h2>
				<h4>У нас в базе более 1000 вакансий, подробнее смотрите в нашем каталоге</h4>

				<div className='lookingForJob__input'>
					<input
						type='text'
						placeholder='Какая вакансия вас интересует?'
						onChange={(e) => setSearch(e.target.value)}
						value={search} />
					<div><Loupe onClick={handleSearch} /></div>
				</div>

				<p className='lookingForJob__filter'>Фильтр</p>

				<div className='lookingForJob__wrapper'>
					<div className='lookingForJob__dropdowns'>

						<AccordionCommon
							name='Доступные вакансии'
							defaultActiveKey='0'
							eventKey='0'>
							{availableVacancies.map(item => (
								<AccordionCommon
									key={item.id}
									name={item.title}
									eventKey={item.id}
									className={'accordion__availableVac'}>
									<div className='accordion__availableVac-wrapper'>
										{item.vacancies.map(vac => (
											<a href={vac.link}>{vac.title}</a>
										))}
									</div>

								</AccordionCommon>
							))}
						</AccordionCommon>

						<AccordionCommon
							name='Оплата в час'
							defaultActiveKey='0'
							eventKey='0'>
							<div className='accordion__wrapper-radio'>
								<p>В месяц оплата от 1000$ -5000$</p>
								<RadioBtn
									name='payment'
									value='3euro'
									text='от 3-5 € в час'
									checked={radioPayment === '3euro' ? true : false}
									onChange={(e) => setRadioPayment(e.target.value)}
									id='3euro'
								/>

								<RadioBtn
									name='payment'
									value='5euro'
									text='от 5-7 € в час'
									id='5euro'
									checked={radioPayment === '5euro' ? true : false}
									onChange={(e) => setRadioPayment(e.target.value)} />

								<RadioBtn
									name='payment'
									value='10euro'
									text='от 10 € в час'
									id='10euro'
									checked={radioPayment === '10euro' ? true : false}
									onChange={(e) => setRadioPayment(e.target.value)} />

								<RadioBtn
									name='payment'
									value='13euro'
									text='от 13-15€ в час'
									id='13euro'
									checked={radioPayment === '13euro' ? true : false}
									onChange={(e) => setRadioPayment(e.target.value)} />
							</div>
						</AccordionCommon>

						<AccordionCommon
							name='Рабочих часов'
							defaultActiveKey='0'
							eventKey='0'>
							<div className='accordion__wrapper-radio'>
								<RadioBtn
									name='hours'
									value='3hours'
									text='от 3-5 € в час'
									checked={radioHours === '3hours' ? true : false}
									onChange={(e) => setRadioHours(e.target.value)}
									id='3hours'
								/>

								<RadioBtn
									name='hours'
									value='5hours'
									text='от 5-7 € в час'
									id='5hours'
									checked={radioHours === '5hours' ? true : false}
									onChange={(e) => setRadioHours(e.target.value)} />

								<RadioBtn
									name='hours'
									value='10hours'
									text='от 10 € в час'
									id='10hours'
									checked={radioHours === '10hours' ? true : false}
									onChange={(e) => setRadioHours(e.target.value)} />

								<RadioBtn
									name='hours'
									value='13hours'
									text='от 13-15€ в час'
									id='13hours'
									checked={radioHours === '13hours' ? true : false}
									onChange={(e) => setRadioHours(e.target.value)} />
							</div>
						</AccordionCommon>

						<AccordionCommon
							name='График работы'
							defaultActiveKey='0'
							eventKey='0'>
							<div className='accordion__wrapper-radio'>
								<RadioBtn
									name='schedule'
									value='5-2'
									text='5 дней в неделю и 2 выходных'
									id='5-2'
									checked={radioSchedule === '5-2' ? true : false}
									onChange={(e) => setRadioSchedule(e.target.value)} />

								<RadioBtn
									name='schedule'
									value='5-6'
									text='5-6 | дней в неделю'
									id='5-6'
									checked={radioSchedule === '5-6' ? true : false}
									onChange={(e) => setRadioSchedule(e.target.value)} />
							</div>
						</AccordionCommon>

						<AccordionCommon
							name='Страна для работы'
							defaultActiveKey='0'
							eventKey='0'>
							<div className='accordion__wrapper-radio'>
								<RadioBtn
									name='country'
									value='poland'
									text='Польша'
									id='poland'
									checked={radioCountry === 'poland' ? true : false}
									onChange={(e) => setRadioCountry(e.target.value)} />

								<RadioBtn
									name='country'
									value='belgium'
									text='Бельгия'
									id='belgium'
									checked={radioCountry === 'belgium' ? true : false}
									onChange={(e) => setRadioCountry(e.target.value)} />

								<RadioBtn
									name='country'
									value='germany'
									text='Германия'
									id='germany'
									checked={radioCountry === 'germany' ? true : false}
									onChange={(e) => setRadioCountry(e.target.value)} />
							</div>
						</AccordionCommon>
					</div>

					<div className='lookingForJob__wrapper-vacancies'>
						{searcVacanciesData.slice(0, initialCount).map(item => (
							<div key={item.id} className='lookingForJob__vac'>

								<div className='lookingForJob__vac-info'>
									<h3>{item.title}</h3>
									<span>{item.salary}</span>
									<p>{item.workingHours}</p>
									<p>{item.city}</p>
									<p>{item.payment}</p>
									<p>{item.count}</p>

									<h5>Остались вопросы? Звоните!</h5>

									<div>
										<Selector />
										<button>
											<a href={item.link} target='_blank'>Смотреть условия</a>
										</button>
									</div>

								</div>

								<div className='lookingForJob__vac-img'>
									<img src={item.img} alt="" />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='lookingForJob__btn'>
					{show ? <button onClick={() => handleShow(searcVacanciesData)}>Еще вакансии</button> : ""}
				</div>
			</Container>
		</section>
	)
}

export default LookingForJob
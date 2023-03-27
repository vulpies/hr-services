import React from 'react'


const HeaderAndFooterInfo = () => {
	return (
		<div className='header__points'>
			<div>
				<h2>HR-work.services</h2>
				<h4>Сервис для поиска работы</h4>
			</div>
			<div>
				<h5>
					Лучший cервис для поиска работы в ЕС<br />
					Сопровождаем на всех этапах трудоустройства
				</h5>
			</div>
			<div>
				<h5>
					Для HR агентств и прямых работодателей<br />
					Хотите <a>разместить ваши вакансии</a> в нашей базе?
				</h5>
			</div>
			<div>
				<h5>
					HR менеджер сейчас Online
				</h5>
				<a href="tel:+375447112464" className='header__phone'>
					+375 (44) 711-24-64
				</a>
			</div>
		</div>
	)
}

export default HeaderAndFooterInfo
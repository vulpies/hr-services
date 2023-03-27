import React from 'react'
import Slider from "react-slick";
import { sliderData } from '../mocks/SliderData';

const HotVacanciesSlider = () => {

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			// {
			// 	breakpoint: 1024,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 		// infinite: true,
			// 	}
			// },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Slider {...settings}>
			{sliderData.map(item => (
				<div key={item.id} className='item__wrapper'>
					<h3>{item.title}</h3>
					<span>{item.salary}</span>
					<p>{item.workingHours}</p>
					<p>{item.city}</p>
					<p>{item.count}</p>

					<button>
						<a href={item.link} target='_blank'>Смотреть условия</a>
					</button>
				</div>
			))}


		</Slider>
	)
}

export default HotVacanciesSlider
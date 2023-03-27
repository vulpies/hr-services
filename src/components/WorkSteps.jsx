import React from 'react'
import { Container } from 'react-bootstrap'
import { worktexts } from '../mocks/WorkStepsData'

const WorkSteps = () => {
	return (
		<section className='steps'>
			<Container>
				<h3 className='steps__title'>Как мы работаем с потенциальным кандидатом</h3>

				<div className='steps__wrapper'>
					{worktexts.map(step => (
						<div key={step.id}>
							<span>{`0${step.id}`}</span>
							<p>{step.text}</p>
						</div>
					))}

					<button>Оставить заявку</button>
				</div>
			</Container>
		</section>
	)
}

export default WorkSteps
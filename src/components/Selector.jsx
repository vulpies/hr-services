import React from 'react'
import { Form } from 'react-bootstrap'

const Selector = ({ onChange, value }) => {
	return (
		<Form.Select
			onChange={onChange}
			value={value}>
			<option>Выберите удобный способ связи</option>
			<option value="1">One</option>
			<option value="2">Two</option>
			<option value="3">Three</option>
		</Form.Select>
	)
}

export default Selector
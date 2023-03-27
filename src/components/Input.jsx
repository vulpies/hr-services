import React from 'react'

const Input = ({ value, onChange }) => {
	return (
		<input
			type='text'
			value={value}
			placeholder='Ваше имя'
			onChange={onChange} />
	)
}

export default Input
import React from 'react'

const RadioBtn = ({ name, value, text, id, onChange, checked }) => {
	return (
		<div className="radio">
			<input id={id}
				type="radio"
				name={name}
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<label htmlFor={id}>{text}</label>
		</div>
	)
}

export default RadioBtn
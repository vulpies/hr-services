import React, { useState } from 'react'
import Selector from './Selector';
import Input from './Input';

const Consultation = () => {
	const [file, setFile] = useState();
	const [name, setName] = useState('');
	const [selected, setSelected] = useState();
	const [searchedBy, setSearchedBy] = useState('applicants')

	const handleFileChange = (e) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const clearInputs = () => {
		setFile('')
		setName('')
		setSelected('')
	}

	const chooseSearch = (e) => {
		setSearchedBy(e.target.attributes['data-search'].value)
	}

	const handleSumbit = (e) => {
		e.preventDefault();

		const newObj = {
			user: name,
			file: file,
			connection: selected,
			searchedBy: searchedBy
		}

		console.log(newObj)
		clearInputs()
	}

	return (
		<>
			<h4>Оставьте заявку на консультацию с HR-Менеджером</h4>
			<h5>и получите бесплатный подбор работы по вашим критериям</h5>

			<div className='consultation__req-form-wrapper'>
				<div>
					<h6
						className={searchedBy === 'applicants' ? 'active' : ''}
						data-search="applicants"
						onClick={chooseSearch}>
						Для соискателей
					</h6>

					<h6
						className={searchedBy === 'employers' ? 'active' : ''}
						data-search="employers"
						onClick={chooseSearch}>
						Для работодателей
					</h6>
				</div>

				<form className='consultation__req-form'>

					<Input value={name} onChange={(e) => setName(e.target.value)} />

					<Selector
						onChange={(e) => setSelected(e.target.value)}
						value={selected} />

					<label className="input-file" onChange={handleFileChange}>
						<input type="file" name="file" />
						{!file ? <span>Прикрепите ваше резюме</span> : <span>{file.name}</span>}
					</label>

					<button onClick={handleSumbit}>Отправить</button>
				</form>

			</div>
		</>
	)
}

export default Consultation
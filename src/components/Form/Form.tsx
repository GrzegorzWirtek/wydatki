import './Form.scss';
import AppContext from '../../context/AppContext';
import React, { useContext, useEffect } from 'react';
import { useRef } from 'react';

const Form = () => {
	const { dispatch } = useContext(AppContext);
	const personOneRef = useRef<HTMLInputElement | null>(null);
	const personTwoRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		personOneRef.current!.focus();
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_PERSONS',
			payload: {
				personOne: personOneRef.current!.value,
				personTwo: personTwoRef.current!.value,
			},
		});
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<p className='form__title'>Dodaj użytkowników</p>
			<input
				ref={personOneRef}
				type='text'
				className='form__input'
				required={true}
				placeholder='Osoba 1'
			/>
			<input
				ref={personTwoRef}
				type='text'
				className='form__input'
				required={true}
				placeholder='Osoba 2'
			/>
			<button className='form__button' type='submit'>
				Dalej
			</button>
		</form>
	);
};

export default Form;
export {};

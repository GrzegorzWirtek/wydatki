import './AddExpense.scss';
import AppContext from '../../context/AppContext';
import { useContext, useEffect, useRef, useState } from 'react';

const AddExpense: React.FC<{
	personName: string | undefined;
	person: string;
}> = ({ personName, person }) => {
	const { dispatch } = useContext(AppContext);
	const textRef = useRef<HTMLInputElement | null>(null);
	const numberRef = useRef<HTMLInputElement | null>(null);

	const [isFormVisible, setIsFormVisible] = useState(false);

	useEffect(() => {
		textRef.current?.focus();
	});

	const handleSubmit = (
		e: React.FormEvent,
		person: string,
		personName: string | undefined,
	) => {
		e.preventDefault();

		dispatch({
			type: person === 'ONE' ? `ADD_AMOUNT_ONE` : 'ADD_AMOUNT_TWO',
			payload: {
				id: Math.floor(Math.random() * 100),
				person: personName,
				title: textRef.current!.value,
				amount: parseFloat(numberRef.current!.value),
			},
		});
		setIsFormVisible(false);
		textRef.current!.value = '';
		numberRef.current!.value = '';
	};

	const handleCancel = () => {
		setIsFormVisible(false);
	};

	return (
		<>
			{isFormVisible ? (
				<form
					className='add-expense__form'
					onSubmit={(e) => handleSubmit(e, person, personName)}>
					<h2 className='add-expenses__person-name'>{personName}</h2>
					<input
						required={true}
						// ref={textRef}
						ref={textRef}
						type='text'
						className='add-expense__title'
					/>
					<input
						required={true}
						ref={numberRef}
						type='number'
						className='add-expense__amount'
					/>
					<button className='add-expense__submit' type='submit'>
						Dodaj
					</button>
					<button
						onClick={handleCancel}
						className='add-expense__cancel'
						type='button'>
						Anuluj
					</button>
				</form>
			) : null}

			<button className='add-expense' onClick={() => setIsFormVisible(true)}>
				Dodaj wydatek
			</button>
		</>
	);
};

export default AddExpense;
export {};
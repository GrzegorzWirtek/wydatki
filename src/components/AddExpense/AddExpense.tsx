import './AddExpense.scss';
import AppContext from '../../context/AppContext';
import { useContext, useEffect, useRef, useState } from 'react';

const AddExpense: React.FC<{
	personName: string | undefined;
	person: string;
}> = ({ personName, person }) => {
	const { dispatch } = useContext(AppContext);
	const textRef = useRef<HTMLTextAreaElement | null>(null);
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
		const date = new Date().toLocaleString().replace(',', '').slice(0, -3);
		console.log(date);
		dispatch({
			type: person === 'ONE' ? `ADD_AMOUNT_ONE` : 'ADD_AMOUNT_TWO',
			payload: {
				id: Date.now(),
				person: personName,
				title: textRef.current!.value,
				amount: parseFloat(numberRef.current!.value),
				date,
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
					className='add-expense'
					onSubmit={(e) => handleSubmit(e, person, personName)}>
					<h2 className='add-expense__person-name'>
						Nowy wydatek - <span className='span--bold'>{personName}</span>
					</h2>
					<textarea
						required={true}
						placeholder='Tytuł'
						cols={2}
						ref={textRef}
						className='add-expense__title'
					/>
					<input
						required={true}
						placeholder='Kwota'
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

			<button
				className={`add-expense__button ${
					person === 'TWO' ? 'add-expense__button--right' : ''
				}`}
				onClick={() => setIsFormVisible(true)}>
				Dodaj wydatek
			</button>
		</>
	);
};

export default AddExpense;
export {};

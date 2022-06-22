import './Expense.scss';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Expense: React.FC<{
	id: number;
	title: string;
	amount: number;
	date: string;
}> = ({ id, title, amount, date }) => {
	const [popupVisible, setPopupVisible] = useState(false);
	const { dispatch } = useContext(AppContext);

	const handleRemove = (id: number) => {
		setPopupVisible(true);
	};

	const handleSubmit = () => {
		setPopupVisible(false);
		dispatch({ type: 'REMOVE_AMOUNT', payload: { id } });
	};

	const handleCancel = () => {
		setPopupVisible(false);
	};

	return (
		<>
			{popupVisible ? (
				<Popup
					text={`Czy na pewno chcesz usunąć wydatek "${title}"?`}
					submit={handleSubmit}
					cancel={handleCancel}
				/>
			) : null}
			<div className='expense'>
				<p className='expense__title'>{title}</p>
				<p className='expense__amount'>{amount}</p>
				<p className='expense__date'>{date}</p>
				<div className='expense__button-wrapper'>
					<button
						className='expense__remove'
						onClick={() => handleRemove(id)}></button>
				</div>
			</div>
		</>
	);
};

export default Expense;
export {};

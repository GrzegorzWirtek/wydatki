import './Expense.scss';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Expense: React.FC<{ id: number; title: string; amount: number }> = ({
	id,
	title,
	amount,
}) => {
	const [popupVisible, setPopupVisible] = useState(false);
	const { dispatch } = useContext(AppContext);

	const handleRemove = (id: number) => {
		console.log(id);
		setPopupVisible(true);
	};

	const handleSubmit = () => {
		console.log('submit id', id);
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
				<button className='expense__remove' onClick={() => handleRemove(id)}>
					Usuń
				</button>
			</div>
		</>
	);
};

export default Expense;
export {};

import { useState } from 'react';
import './Nav.scss';
import Ham from '../Ham/Ham';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Popup from '../Popup/Popup';

const POPUP_TEXT = [
	'Czy na pewno chcesz zresetować wszystkie wydatki?',
	'Czy na pewno chcesz usunąć użytkowników?',
];

const Nav = () => {
	const [navVisible, setNavVisible] = useState(false);
	const [popupVisible, setPopupVisible] = useState(false);
	const [popupType, setPopupType] = useState(0);

	const { dispatch } = useContext(AppContext);

	const handleHamClick = () => {
		setNavVisible((prev) => !prev);
	};

	const handleHamClose = () => {
		setNavVisible(false);
	};

	const handleReset = () => {
		setPopupVisible(true);
	};

	const handleSubmit = () => {
		setPopupVisible(false);
		if (popupType === 0) {
			dispatch({
				type: 'RESET_EXPENSES',
			});
		} else if (popupType === 1) {
			dispatch({
				type: 'DELETE_ALL',
			});
		} else return;
	};

	const handleCancel = () => {
		setPopupVisible(false);
	};

	return (
		<>
			{popupVisible ? (
				<Popup
					text={POPUP_TEXT[popupType]}
					submit={handleSubmit}
					cancel={handleCancel}
				/>
			) : null}
			<nav className='nav'>
				<Ham click={handleHamClick} navVisible={navVisible} />
				<ul
					className={`nav__ul ${navVisible ? 'nav__ul--mobile-active' : ''}`}
					onClick={handleHamClose}>
					<li
						className='nav__li nav__li--important'
						onClick={() => {
							setPopupType(0);
							handleReset();
						}}>
						Resetuj wydatki
					</li>
					<li
						className='nav__li'
						onClick={() => {
							setPopupType(1);
							handleReset();
						}}>
						Usuń użytkowników
					</li>
					<li className='nav__li'>O aplikacji</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
export {};

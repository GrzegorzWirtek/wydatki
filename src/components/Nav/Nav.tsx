import { useState } from 'react';
import './Nav.scss';
import Ham from '../Ham/Ham';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Popup from '../Popup/Popup';
import About from '../About/About';

const POPUP_TEXT = [
	'Czy na pewno chcesz usunąć wszystkie wydatki?',
	'Czy na pewno chcesz usunąć użytkowników i ich wydatki?',
];

const Nav = () => {
	const [navVisible, setNavVisible] = useState(false);
	const [popupVisible, setPopupVisible] = useState(false);
	const [popupType, setPopupType] = useState(0);
	const [aboutVisible, setAboutVisible] = useState(false);

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

	const handleAboutClose = () => {
		setAboutVisible(false);
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

			{aboutVisible ? <About close={handleAboutClose} /> : null}
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
						Resetuj użytkowników
					</li>
					<li className='nav__li' onClick={() => setAboutVisible(true)}>
						O aplikacji
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
export {};

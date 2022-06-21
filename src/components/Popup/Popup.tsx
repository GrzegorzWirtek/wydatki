import './Popup.scss';

const Popup: React.FC<{
	text: string;
	submit: () => void;
	cancel: () => void;
}> = ({ text, submit, cancel }) => {
	return (
		<div className='popup'>
			<p className='popup__title'>{text}</p>
			<button className='popup__submit' onClick={submit}>
				Tak
			</button>
			<button className='popup__cancel' onClick={cancel}>
				Nie
			</button>
		</div>
	);
};

export default Popup;
export {};

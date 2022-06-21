import './Ham.scss';

const Ham: React.FC<{ click: () => void; navVisible: boolean }> = ({
	click,
	navVisible,
}) => {
	return (
		<div className='ham' onClick={click}>
			<div
				className={`ham__item ${navVisible ? 'ham__item--active' : ''}`}></div>
			<div
				className={`ham__item ${navVisible ? 'ham__item--active' : ''}`}></div>
			<div
				className={`ham__item ${navVisible ? 'ham__item--active' : ''}`}></div>
		</div>
	);
};

export default Ham;
export {};

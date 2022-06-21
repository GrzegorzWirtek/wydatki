import './About.scss';

const About: React.FC<{ close: () => void }> = ({ close }) => {
	return (
		<section className='about'>
			<p className='about__description'>O aplikacji</p>

			<button className='about__close' onClick={close}></button>
		</section>
	);
};

export default About;
export {};

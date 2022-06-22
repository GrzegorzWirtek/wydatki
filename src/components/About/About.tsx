import './About.scss';

const About: React.FC<{ close: () => void }> = ({ close }) => {
	return (
		<section className='about'>
			<h1 className='about__title'>Aplikacja WYDATKI</h1>
			<p className='about__description'>
				Aplikacja przeznaczona głównie na urządzenia mobilne. Służy do notowania
				i obliczania ilorazu wspólnych kosztów dwojga użytkowników. Aplikacja
				pozwala na dodawanie wydatków i zachowywanie ich w pamięci, przechowując
				dane w Locale Storage przegladarki. Napisana za pomocą React.js,
				TypeScript, CSS/SCSS.
			</p>
			<p className='about__name'>2022 &copy; Grzegorz Wirtek</p>
			<div className='about__icons'>
				<a
					href='https://github.com/GrzegorzWirtek?tab=repositories'
					target='blank'
					className='about__icon'>
					<img src='gh.svg' alt='github icon' />
				</a>
				<a
					href='https://www.facebook.com/grzegorz.wirtek/'
					target='blank'
					className='about__icon'>
					<img src='fb.svg' alt='facebook icon' />
				</a>
				<a
					href='https://www.instagram.com/grzegorz.wirtek/'
					target='blank'
					className='about__icon about__icon--in'>
					<img src='in.svg' alt='instagram icon' />
				</a>
			</div>

			<button className='about__close' onClick={close}></button>
		</section>
	);
};

export default About;
export {};

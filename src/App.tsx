import './App.scss';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Main from './components/Main/Main';
import AppContext from './context/AppContext';
import { useContext } from 'react';

// {
//   isStart: true,
//   persons: {
//     personOne: {
//       name: 'Gosia',
//       expenses: [{ title: 'Reastauracja', amount: 26 }],
//     },
//     personTwo: {
//       name: 'Grzesiek',
//       expenses: [{ title: 'Bar', amount: 210 }],
//     },
//   },
// },

function App() {
	const { state } = useContext(AppContext);
	const content = state.isStart ? (
		<Form />
	) : (
		<>
			<Nav />
			<Main />
		</>
	);

	return <div className='App'>{content}</div>;
}

export default App;

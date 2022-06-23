import './Main.scss';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Expense from '../Expense/Expense';
import AddExpense from '../AddExpense/AddExpense';

type expensesType =
	| {
			id: number;
			title: string;
			amount: number;
			date: string;
	  }[]
	| undefined;

const Main = () => {
	const {
		state: { persons },
	} = useContext(AppContext);

	const sumCalculate = (exp: expensesType) => {
		return exp
			? exp?.reduce((acc, item) => {
					return acc + item.amount;
			  }, 0)
			: 0;
	};

	const sumPersonOne = sumCalculate(persons?.personOne.expenses);
	const sumPersonTwo = sumCalculate(persons?.personTwo.expenses);
	let comment;
	if (sumPersonOne === sumPersonTwo) {
		// comment = `${persons?.personOne.name} i ${persons?.personTwo.name} wydali tyle samo - każdy ${sumPersonOne}zł.`;

		comment = (
			<>
				<span className='main__span--bold'>{persons?.personOne.name}</span> i{' '}
				<span className='main__span--bold'>{persons?.personTwo.name}</span>{' '}
				wydali tyle samo - każdy{' '}
				<span className='main__span--bolder'>{sumPersonOne}</span>zł.
			</>
		);
	} else if (sumPersonOne > sumPersonTwo) {
		const difference = sumPersonOne / 2 - sumPersonTwo / 2;
		comment = (
			<>
				<span className='main__span--bold'>{persons?.personTwo.name}</span>{' '}
				zwraca <span className='main__span--bolder'>{difference}</span>zł
				użytkownikowi{' '}
				<span className='main__span--bold'>{persons?.personOne.name}</span>.
				Każdy poniesie koszt{' '}
				<span className='main__span--bold'>{sumPersonOne - difference}</span>zł.
			</>
		);
	} else if (sumPersonOne < sumPersonTwo) {
		const difference = sumPersonTwo / 2 - sumPersonOne / 2;
		comment = (
			<>
				<span className='main__span--bold'>{persons?.personOne.name}</span>{' '}
				zwraca <span className='main__span--bolder'>{difference}</span>zł
				użytkownikowi{' '}
				<span className='main__span--bold'>{persons?.personTwo.name}</span>.
				Każdy poniesie koszt{' '}
				<span className='main__span--bold'>{sumPersonTwo - difference}</span>zł.
			</>
		);
	}

	const expensesItems = (
		exp:
			| { id: number; title: string; amount: number; date: string }[]
			| undefined,
	): JSX.Element[] | undefined => {
		return exp?.map((item) => (
			<Expense
				key={item.id}
				id={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	};

	return (
		<main className='main'>
			<header className='main__header'>
				<p className='main__person-name'>{persons?.personOne.name}</p>
				<p className='main__amount'>
					{sumPersonOne}
					<span className='main__amount-span'>zł</span>{' '}
				</p>
			</header>

			<header className='main__header main__header--right'>
				<p className='main__person-name'>{persons?.personTwo.name}</p>
				<p className='main__amount'>
					{sumPersonTwo}
					<span className='main__amount-span'>zł</span>{' '}
				</p>
			</header>

			<section className='main__amounts'>
				{expensesItems(persons?.personOne.expenses)}
			</section>

			<section className='main__amounts'>
				{expensesItems(persons?.personTwo.expenses)}
			</section>

			<AddExpense personName={persons?.personOne.name} person={'ONE'} />
			<AddExpense personName={persons?.personTwo.name} person={'TWO'} />

			<p className='main__comment'>{comment}</p>
		</main>
	);
};

export default Main;
export {};

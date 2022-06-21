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
	let comment = '';
	if (sumPersonOne === sumPersonTwo) {
		comment = `${persons?.personOne.name} i ${persons?.personTwo.name} wydali tyle samo - każdy ${sumPersonOne}zł.`;
	} else if (sumPersonOne > sumPersonTwo) {
		const difference = sumPersonOne / 2 - sumPersonTwo / 2;
		comment = `${
			persons?.personTwo.name
		} zwraca ${difference}zł użytkownikowi ${
			persons?.personOne.name
		}. Wtedy każdy poniesie koszt ${sumPersonOne - difference}zł`;
	} else if (sumPersonOne < sumPersonTwo) {
		const difference = sumPersonTwo / 2 - sumPersonOne / 2;
		comment = `${
			persons?.personOne.name
		} zwraca ${difference}zł użytkownikowi ${
			persons?.personTwo.name
		}. Wtedy każdy poniesie koszt ${sumPersonTwo - difference}zł`;
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
			<section className='main__person'>
				<div className='main__header'>
					<p className='main__amount'>
						{sumPersonOne}
						<span className='main__amount-span'>zł</span>{' '}
					</p>
					<p className='main__person-name'>{persons?.personOne.name}</p>
				</div>
				<div className='main__amounts-wrapper'>
					{expensesItems(persons?.personOne.expenses)}
				</div>
			</section>
			<section className='main__person'>
				<div className='main__header'>
					<p className='main__amount'>
						{sumPersonTwo}
						<span className='main__amount-span'>zł</span>{' '}
					</p>
					<p className='main__person-name'>{persons?.personTwo.name}</p>
				</div>
				<div className='main__amounts-wrapper'>
					{expensesItems(persons?.personTwo.expenses)}
				</div>
			</section>
			<AddExpense personName={persons?.personOne.name} person={'ONE'} />
			<AddExpense personName={persons?.personTwo.name} person={'TWO'} />
			<p className='main__comment'>{comment}</p>
		</main>
	);
};

export default Main;
export {};

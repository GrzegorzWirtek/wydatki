import { ACTION_TYPE, initialStateType } from './types';

const appReducer = (state: initialStateType, action: ACTION_TYPE) => {
	console.log(action, 'action to');
	switch (action.type) {
		case 'ADD_PERSONS':
			return {
				isStart: false,
				persons: {
					personOne: {
						name: action.payload.personOne,
						expenses: [],
					},
					personTwo: {
						name: action.payload.personTwo,
						expenses: [],
					},
				},
			};
		case 'ADD_AMOUNT_ONE':
			return {
				...state,
				persons: {
					...state.persons!,
					personOne: {
						...state.persons!.personOne,
						expenses: [
							...state.persons!.personOne.expenses!,
							{
								id: action.payload.id,
								title: action.payload.title,
								amount: action.payload.amount,
							},
						],
					},
				},
			};
		case 'ADD_AMOUNT_TWO':
			return {
				...state,
				persons: {
					...state.persons!,
					personTwo: {
						...state.persons!.personTwo,
						expenses: [
							...state.persons!.personTwo.expenses!,
							{
								id: action.payload.id,
								title: action.payload.title,
								amount: action.payload.amount,
							},
						],
					},
				},
			};
		case 'RESET_EXPENSES':
			return {
				...state,
				persons: {
					personOne: {
						...state.persons!.personOne,
						expenses: [],
					},
					personTwo: {
						...state.persons!.personTwo,
						expenses: [],
					},
				},
			};
		case 'REMOVE_AMOUNT':
			return {
				...state,
				persons: {
					personOne: {
						...state.persons!.personOne,
						expenses: state.persons!.personOne.expenses!.filter(
							(item) => item.id !== action.payload.id,
						),
					},
					personTwo: {
						...state.persons!.personTwo,
						expenses: state.persons!.personTwo.expenses!.filter(
							(item) => item.id !== action.payload.id,
						),
					},
				},
			};
		case 'DELETE_ALL':
			return { isStart: true };
		default:
			return state;
	}
};

export default appReducer;
export {};

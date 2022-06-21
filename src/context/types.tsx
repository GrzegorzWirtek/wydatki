export const initialState = { isStart: true };

export type initialStateType = {
	isStart: boolean;
	persons?: {
		personOne: {
			name: string;
			expenses?: { id: number; title: string; amount: number; date: string }[];
		};
		personTwo: {
			name: string;
			expenses?: { id: number; title: string; amount: number; date: string }[];
		};
	};
};

export type ACTION_TYPE =
	| {
			type: 'ADD_PERSONS';
			payload: { personOne: string; personTwo: string };
	  }
	| {
			type: 'RESET_EXPENSES';
	  }
	| { type: 'DELETE_ALL' }
	| {
			type: 'ADD_AMOUNT_ONE';
			payload: {
				id: number;
				person: string | undefined;
				title: string;
				amount: number;
				date: string;
			};
	  }
	| {
			type: 'ADD_AMOUNT_TWO';
			payload: {
				id: number;
				person: string | undefined;
				title: string;
				amount: number;
				date: string;
			};
	  }
	| {
			type: 'REMOVE_AMOUNT';
			payload: {
				id: number;
			};
	  };

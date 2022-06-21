import { createContext } from 'react';
import { ACTION_TYPE, initialState, initialStateType } from './types';

const AppContext = createContext<{
	state: initialStateType;
	dispatch: (action: ACTION_TYPE) => void;
}>({
	state: initialState,
	dispatch: () => {},
});

export default AppContext;
export {};

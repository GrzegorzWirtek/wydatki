import React, { useMemo, useReducer } from 'react';
import { useLocalStorage, useLocalStorageType } from '../hooks/useLocalStorage';
import AppContext from './AppContext';
import appReducer from './appReducer';

export const AppState: React.FC<{ children: React.ReactNode }> = (props) => {
	const [state, setState] = useLocalStorage<useLocalStorageType>('expenses', {
		isStart: true,
	});

	const [contextState, dispatch] = useReducer(
		appReducer,
		state ? state : { isStart: true },
	);

	useMemo(() => {
		return setState(contextState);
	}, [contextState, setState]);

	return (
		<AppContext.Provider value={{ state: contextState, dispatch }}>
			{props.children}
		</AppContext.Provider>
	);
};

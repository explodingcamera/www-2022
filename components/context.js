import React from 'react';

const defaultState = {
	hasAnimated: false,
};

export const GlobalContext = React.createContext({
	...defaultState,
	update: () => {},
});

const GlobalProvider = ({ children }) => {
	const [state, setState] = React.useState(defaultState);

	const update = (key, value) => setState(s => ({ ...s, [key]: value }));

	return (
		<GlobalContext.Provider value={{ ...state, update }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
export const useGlobal = () => React.useContext(GlobalContext);

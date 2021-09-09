import React, { ReactChildren, useMemo } from 'react';

const defaultState = {
	hasAnimated: false,
};

export const GlobalContext = React.createContext({
	...defaultState,
	update: (_key: string, _value: boolean): void => undefined,
});

const GlobalProvider = ({ children }: { children: ReactChildren }) => {
	const [state, setState] = React.useState(defaultState);

	const value = useMemo(
		() => ({
			...state,
			update: (key: string, value: boolean) =>
				setState(s => ({ ...s, [key]: value })),
		}),
		[state],
	);

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export default GlobalProvider;
export const useGlobal = () => React.useContext(GlobalContext);
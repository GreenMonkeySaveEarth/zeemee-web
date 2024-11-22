import React, { createContext, useState, useContext } from 'react';

interface SearchContextProps {
	query: string;
	handleSearch: (searchQuery: string) => void;
}
interface SearchProviderProps {
	children: React.ReactNode
}

const SearchContext = createContext<SearchContextProps | null>(null);
export const SearchProvider = ({ children }: SearchProviderProps): JSX.Element => {
	const [query, setQuery] = useState('');

	const handleSearch = (searchQuery: string): void => {
		setQuery(searchQuery);
	};

	return (
		<SearchContext.Provider value={{ query, handleSearch }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = (): SearchContextProps => {

	const context = useContext(SearchContext);
	if (!context) {
		throw new Error('useSearch must be used within a SearchProvider');
	}
	return context;
};

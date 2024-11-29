import React, { createContext, useEffect, useState, useContext } from 'react';
import { Drink } from '../types/drink';
interface SearchContextProps {
	query: string;
	handleSearch: (searchQuery: string) => void;
	drinks: Drink[] | [];
	setPage: React.Dispatch<React.SetStateAction<number>>;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
	limit: number;
	page: number;
	searchDrinkLoading: boolean;
	fetchDrinkDetails: (id: string) => void;
	drinkDetails: Drink | null;
	drinkDetailsLoading: boolean;
	totalCount: number;
}
interface SearchProviderProps {
	children: React.ReactNode
}

const SearchContext = createContext<SearchContextProps | null>(null);
export const SearchProvider = ({ children }: SearchProviderProps): JSX.Element => {
	const [query, setQuery] = useState('');
	const [drinks, setDrinks] = useState<Drink[] | []>([]);
	const [drinkDetails, setDrink] = useState<null | Drink>(null);
	const [searchDrinkLoading, setSearchDrinkLoading] = useState(false);
	const [drinkDetailsLoading, setDrinkDetailsLoading] = useState(false);
	const [totalCount, setTotalCount] = useState(0);
	const [page, setPage] = useState(1);
	const [offset, setOffset] = useState(0); // Set the offset for pagination
	const [limit] = useState(6); // Set the limit for pagination

	useEffect(() => {
		fetchDrinks();
	}, [page, query]);

	const handleSearch = (searchQuery: string): void => {
		setQuery(searchQuery);
	};

	const fetchDrinkDetails = async (id: string) => {
		setDrinkDetailsLoading(true);
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/detail?id=${id}`);
			const data = await response.json();
			const drink = data.drinks[0];
			if (drink) {
				setDrink(drink);
			} else {
				setDrink(null);
			}
		} catch (error) {
			console.error(error);
		}
		setDrinkDetailsLoading(false);
	};

	const fetchDrinks = async () => {
		setSearchDrinkLoading(true);
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/search?index=${offset}&limit=${limit}&query=${query}`);
			const data = await response.json();
			setDrinks(data.drinks);
			setTotalCount(data.totalCount);
		} catch (error) {
			console.error(error);
		}
		setSearchDrinkLoading(false);
	};

	return (
		<SearchContext.Provider value={{
			query,
			handleSearch,
			drinks,
			limit,
			setPage,
			setOffset,
			page,
			searchDrinkLoading,
			fetchDrinkDetails,
			drinkDetails,
			drinkDetailsLoading,
			totalCount
		}}>
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

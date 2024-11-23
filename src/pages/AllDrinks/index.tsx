import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useSearch } from '../../context/searchContext';

const AllDrinks = () => {
	const [drinks, setDrinks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const { query } = useSearch();

	useEffect(() => {
		fetchDrinks();
	}, [page, query]);

	const fetchDrinks = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`API_ENDPOINT?page=${page}&query=${query}`);
			setDrinks(response.data.drinks);
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	};

	return (
		<Box>
			{loading ? (
				<CircularProgress />
			) : (
				<div>
					<ul>
						{drinks.map((drink) => (
							<li key={drink.id} onClick={() => navigate(`/cocktails/${drink.id}`)}>
								{drink.name}
							</li>
						))}
					</ul>
					<Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</Button>
					<Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
				</div>
			)}
		</Box>
	);
};

export default AllDrinks;
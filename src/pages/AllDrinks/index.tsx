import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, CircularProgress } from '@mui/material';
import axios from 'axios';


const AllDrinks = () => {
	const [drinks, setDrinks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);
	const navigate = useNavigate();

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

	const handleSearch = (e) => {
		if (e.key === 'Enter') {
			setPage(1);
			fetchDrinks();
		}
	};

	return (
		<div>
			<header>
				<img src="logo.png" alt="Logo" />
				<TextField
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyPress={handleSearch}
					placeholder="Search for drinks"
				/>
			</header>
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
		</div>
	);
};

export default AllDrinks;
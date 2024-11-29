import { useState } from 'react';
import { Input, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const { handleSearch } = useSearch();
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const onSearch = () => {
		handleSearch(query);
		navigate('/drinks', { state: { query } });
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ display: 'flex', alignItems: 'center', flex: 1, borderRadius: '8px 0px 0px 8px', height: '40px', border: '1px solid #ccc', paddingLeft: '8px' }}>
				<SearchIcon />
				<Input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search all drinks"
					style={{ border: 'none', outline: 'none', flex: 1, height: '100%', paddingLeft: '8px', backgroundColor: 'transparent' }}
					disableUnderline
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							onSearch();
						}
					}}
				/>
			</Box>
			<Button onClick={onSearch} variant="outlined" sx={{
				borderRadius: '0 8px 8px 0', color: "Sky.White", borderColor: "Sky.White", height: '40px', padding: '0 16px'
			}}>
				Go
			</Button>
		</Box>
	);
};

export default SearchBar;
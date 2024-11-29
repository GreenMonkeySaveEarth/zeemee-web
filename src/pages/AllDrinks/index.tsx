import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useSearch } from '../../context/SearchContext';
import NoResult from '@/components/NoResult';
import DefaultLoading from '@/components/DefaultLoading';
import Title from './Title';
import CategoryTag from '@/components/CategoryTag';

const AllDrinks = () => {
	const navigate = useNavigate();
	const { drinks, setPage, page, searchDrinkLoading, query, totalCount, setOffset, limit } = useSearch();
	const handlePrevPage = () => {
		setPage((prev) => Math.max(prev - 1, 1))
		setOffset((prev) => Math.max(prev - limit, 0))
	}

	const handleNextPage = () => {
		setPage((prev) => prev + 1)
		setOffset((prev) => prev + limit)
	}

	const handleOnClick = (id: string) => {
		navigate(`/drinks/${id}`)
	}

	const renderDrinks = () => {
		return (
			<Box>
				<Grid container spacing={3} justifyContent="flex-start">
					{drinks.map((drink) => (
						<Grid item xs={12} md={6} key={drink.id}>
							<Card
								sx={{
									display: 'flex',
									cursor: 'pointer',
									border: '2px solid white',
									padding: 2,
									minHeight: 206,
								}}
								onClick={() => handleOnClick(drink.id)}
							>
								<CardMedia
									component="img"
									sx={{ width: '30%', objectFit: 'cover' }}
									image={drink.image}
									alt={drink.name}
								/>
								<Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
									<CardContent sx={{ flex: '1 0 auto' }}>
										<Typography variant="h6">{drink.name}</Typography>
										<CategoryTag category={drink.category} />
									</CardContent>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
				<Box sx={{ mt: 2 }}>
					<Button sx={{ color: 'Sky.White' }} onClick={handlePrevPage} disabled={page === 1} startIcon={<ChevronLeftOutlinedIcon />} />
					<Button sx={{ color: 'Sky.White' }} onClick={handleNextPage} endIcon={<ChevronRightOutlinedIcon />} />
				</Box>
			</Box>
		);
	};

	return (
		<Box>
			{searchDrinkLoading ? (
				<DefaultLoading />
			) : (
				<Box>
					{drinks.length === 0 ? (
						<NoResult />
					) : (
						<Box sx={{ mt: 7, maxWidth: '906px', margin: '0 auto' }}>
							<Title query={query} totalCount={totalCount} />
							<Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
								{renderDrinks()}
							</Box>
						</Box>
					)}
				</Box >
			)}
		</Box >
	);
};

export default AllDrinks;
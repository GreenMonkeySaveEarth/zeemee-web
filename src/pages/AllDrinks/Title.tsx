import { Box, Typography } from '@mui/material';
interface TitleProps {
	query: string;
	totalCount: number;
}
const Title = ({ query, totalCount }: TitleProps): JSX.Element => {
	return (
		<Box sx={{ mt: 7 }}>
			{query ? (
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="h4">
						Search: {query}
					</Typography>
					<Typography variant="h6">
						{totalCount} {totalCount === 1 ? 'result' : 'results'}
					</Typography>
				</Box>
			) : (
				<Typography variant="h4" align="center">
					All Drinks
				</Typography>
			)}
		</Box >
	)
}

export default Title;
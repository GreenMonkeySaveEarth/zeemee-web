import { Box, Typography } from '@mui/material';

const NoResult = ({ message }: { message?: string }): JSX.Element => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
		>
			<Typography variant="h6" color="textSecondary">
				{message ? message : 'No Results Found'}
			</Typography>
		</Box>
	);
};

export default NoResult;
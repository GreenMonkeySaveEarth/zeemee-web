import { Box, CircularProgress } from '@mui/material';

const DefaultLoading = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			flexDirection="column"
		>
			<CircularProgress sx={{ color: 'Sky.White' }} />
			<Box mt={2}>Searching...</Box>
		</Box>
	)
}

export default DefaultLoading;
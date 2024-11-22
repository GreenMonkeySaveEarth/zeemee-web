import { Drink } from "@/types/drink"
import { Box, Typography } from "@mui/material"

const DrinkHeader = ({ drink }: { drink: Drink }) => {
	return (
		<Box sx={{ mt: 6 }}>
			<Typography variant="h2">{drink.name}</Typography>
		</Box>
	)
}

export default DrinkHeader
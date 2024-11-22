import { Drink } from "@/types/drink"
import { Box, Button, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import ShareLink from "./ShareLink"

const DrinkContent = ({ drink }: { drink: Drink }) => {
	return (
		<Box sx={{ border: 1, borderColor: "white", borderRadius: 1, p: 3, maxWidth: 628 }}>
			<Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
				<Box
					sx={{
						width: 220,
						height: 220,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Box
						component="img"
						src={drink.image}
						sx={{
							objectFit: 'scale-down',
							width: '100%',
							height: '100%',
							display: 'block',
						}}
						alt={drink.name}
						loading="lazy"
					/>
				</Box>
				<Box sx={{ ml: 8 }}>
					<Typography variant="h4" color={'grey.300'}>{drink.ingredients.length} Ingredients</Typography>
					<Box sx={{ mt: 2 }}>
						<List>
							{drink.ingredients.map((ingredient, index) => (
								<ListItem key={index}>
									<ListItemText primary={ingredient.measurement} />
									&nbsp;
									<ListItemText primary={ingredient.name} />
								</ListItem>
							))}
						</List>
					</Box>
				</Box>
			</Box>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h4" color={'grey.300'}>Instructions</Typography>
				<p>{drink.instructions}</p>
			</Box>
			<Box>
				<ShareLink drinkId={drink.id} />
			</Box>
		</Box >
	)
}

export default DrinkContent
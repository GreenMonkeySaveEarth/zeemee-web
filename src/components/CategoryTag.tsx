import { Box, Typography } from "@mui/material"

const CategoryTag = ({ category }: { category: string }) => {
	return (
		<Box sx={{ border: 1, borderColor: "white", borderRadius: 1, p: 0.5, mt: 1, display: 'inline-block' }}>
			<Typography variant="body1" sx={{ color: 'grey.700' }}>{category}</Typography>
		</Box>
	)
}

export default CategoryTag
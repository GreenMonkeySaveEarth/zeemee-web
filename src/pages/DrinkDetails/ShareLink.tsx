import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Typography, Box, Input, Button } from "@mui/material"


const CopyButton = (): JSX.Element => (
	<Button
		variant="contained"
		sx={{
			py: 1,
			backgroundColor: 'blue',
			borderRadius: '0 8px 8px 0',
		}}
		onClick={() => navigator.clipboard.writeText(window.location.href)}
	>
		<Box sx={{ px: 1 }}>
			<ContentCopyOutlinedIcon />
		</Box>
		Copy
	</Button>
)


const ShareLink = ({ drinkId }: { drinkId: string }) => {
	return (
		<>
			<Typography variant="h4" color={'grey.300'}>Share Link</Typography>
			<Box sx={{ display: 'flex', alignItems: 'center', pt: 1 }}>
				<Input
					type="text"
					value={window.location.href}
					readOnly
					sx={{
						flexGrow: 1,
						borderRadius: '8px 0px 0px 8px',
						pl: 2,
						pr: 0,
						py: 1,
						backgroundColor: 'white',
						color: 'grey.400',
						height: '48px',
					}}

				/>
				<CopyButton />
			</Box>
		</>
	)
}
export default ShareLink
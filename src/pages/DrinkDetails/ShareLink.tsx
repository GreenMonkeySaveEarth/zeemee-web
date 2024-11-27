
import { useState } from 'react';

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Typography, Box, Input, Button } from "@mui/material"

const CopyButton = (): JSX.Element => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(window.location.href);
		setCopied(true);
	};

	return (
		<Button
			variant="contained"
			sx={{
				py: 1.5,
				backgroundColor: 'blue',
				borderRadius: '0 8px 8px 0',
				display: 'flex',
				alignItems: 'center',
			}}
			onClick={handleCopy}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
				{copied ? <CheckCircleOutlinedIcon /> : <ContentCopyOutlinedIcon />}
			</Box>
			{copied ? 'Copied' : 'Copy'}
		</Button>
	);
};


const ShareLink = () => {
	return (
		<>
			<Typography variant="h4" color={'grey.700'}>Share Link</Typography>
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
						backgroundColor: 'Sky.White',
						color: 'grey.400',
					}}

				/>
				<CopyButton />
			</Box>
		</>
	)
}
export default ShareLink
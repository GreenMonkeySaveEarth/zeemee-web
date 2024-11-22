import Box from '@mui/material/Box';
import copyIcon from '../../assets/Check-Icon.svg';
const CopyIcon = (
	<Box
		component="img"
		src={copyIcon}
		sx={{ cursor: 'pointer', maxWidth: 105 }}
	/>
);

export default CopyIcon;
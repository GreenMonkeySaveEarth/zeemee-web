import { AppBar, Box, Toolbar } from '@mui/material';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar style={{ justifyContent: 'space-between' }}>
				<Box style={{ flex: 1 }}>
					<Logo />
				</Box>
				<Box style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
					<SearchBar />
				</Box>
				<Box style={{ flex: 1 }} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
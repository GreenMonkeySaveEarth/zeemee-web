import React from 'react';
import Header from './Header';
interface SiteLayoutProps { children: React.ReactNode }

const SiteLayout = ({ children }: SiteLayoutProps): JSX.Element => {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default SiteLayout;
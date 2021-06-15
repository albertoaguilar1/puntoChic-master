import React from 'react';
import SEO from '../seo';
import Navbar from '../navbar';

const Layout = (props: any) => {
	return (
		<SEO>
			<Navbar />
			{props.children}
		</SEO>
	);
};

export default Layout;

import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function Navbar() {
	return (
		<nav className='flex flex-row w-screen items-center justify-between align-middle pt-5 px-4 mb-5 lg:px-16 text-sm lg:text-2xl'>
			<Link to='/' className='w-24 lg:w-32 mr-2'>
				<img src={logo} alt='logo' />
			</Link>
			<div className='hidden lg:flex' style={{ flexGrow: 2 }} />
			<div
				className='flex flex-row justify-around md:justify-between'
				style={{ flexGrow: 3 }}
			>
				<Link className='hidden lg:flex' to='/proyecto'>
					El Proyecto
				</Link>
				<AnchorLink to='/#patrocinadores' stripHash={true}>
					Patrocinadores
				</AnchorLink>
				<AnchorLink
					className='hidden lg:flex'
					to='/#socios'
					stripHash={true}
				>
					Museos
				</AnchorLink>
				<AnchorLink to='/#contacto' stripHash={true}>
					Contacto
				</AnchorLink>
			</div>
		</nav>
	);
}

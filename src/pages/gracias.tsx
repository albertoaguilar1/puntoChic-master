import React from 'react';
import { Link } from 'gatsby';

function Gracias() {
	return (
		<div className='flex flex-col h-screen items-center justify-center p-10 bg-alt text-white text-center'>
			<div className='text-2xl lg:text-4xl'>Gracias por contactarnos</div>
			<div className='text-xs'>
				Te responderemos lo más pronto posible...
			</div>
			<Link to='/' className='underline mt-5'>
				Volver al inicio
			</Link>
		</div>
	);
}

export default Gracias;

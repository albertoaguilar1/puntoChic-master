import React from 'react';

function ContactForm() {
	const submit = () => {
		document.forms[0].submit();
	};
	return (
		<form
			name='Punto Chic by Angy  Contacto'
			method='POST'
			action='/gracias'
			data-netlify='true'
			netlify-honeypot='bot-field'
		>
			<div className='flex flex-col lg:flex-row align-middle items-center'>
				<input
					type='hidden'
					name='form-name'
					value='Punto Chic by Angy  Contacto'
				/>
				<p className='hidden'>
					<label>
						Don’t fill this out if you're human:{' '}
						<input name='bot-field' type='text' />
					</label>
				</p>
				<div className='px-5 lg:px-56 py-10 w-full lg:w-3/4'>
					<input
						type='text'
						placeholder='Nombre'
						name='name'
						id='name'
						className='focus:outline-none focus:shadow-outline border rounded-lg py-2 my-5 px-4 block w-full'
					/>
					<input
						type='email'
						placeholder='Correo'
						name='email'
						id='email'
						className='focus:outline-none focus:shadow-outline border rounded-lg py-2 my-5 px-4 block w-full'
					/>
					<input
						type='text'
						placeholder='Asunto'
						name='subject'
						id='subject'
						className='focus:outline-none focus:shadow-outline border rounded-lg py-2 my-5 px-4 block w-full'
					/>
					<textarea
						name='text'
						id='text'
						placeholder='Texto'
						cols={30}
						rows={4}
						draggable={false}
						className='resize-none focus:outline-none focus:shadow-outline border rounded-lg py-2 my-5 px-4 block w-full '
					/>
				</div>
				<div className='flex flex-row justify-evenly'>
					<div
						className='w-20 h-20 rounded-full bg-alt hover:bg-alt-light p-5 cursor-pointer'
						onClick={submit}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							version='1.1'
							xmlSpace='preserve'
							id='Capa_1'
							x='0px'
							y='0px'
							viewBox='0 0 31.49 31.49'
						>
							<path
								style={{ fill: 'white' }}
								d='M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z'
							/>
						</svg>
					</div>
				</div>
			</div>
		</form>
	);
}

export default ContactForm;

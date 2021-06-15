import React from 'react';
import Layout from '../components/layout/layout';
import style from '../variables.module.scss';
import Footer from '../components/footer';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

function Proyecto() {
	return (
		<Layout>
			<div className='flex flex-col'>
				<div className='lg:w-10/12 self-center p-5 lg:py-10 lg:px-0 text-left leading-none'>
					<h1 className='font-semibold text-3xl lg:text-5xl c-primary lg:w-4/6'>
						PuntoChic
					</h1>
				</div>
			</div>
			<div className='flex flex-col py-5 px-10'>
				<div className='flex flex-col lg:flex-row justify-evenly'>
					<div className='w-full lg:w-5/12 mb-5'>
						Nuestro objetivo es escuchar tus problemas y darte la
						mejor atencion.
					</div>
					<div className='w-full lg:w-5/12'>
						Bienvenidos aqui encontraras muchos.
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-end space-x-2 lg:mt-20 mb-10 items-end w-full relative lg:right-m-50'>
				<div className='flex flex-col w-full lg:w-6/12 space-y-2 mb-12 lg:mb-5 items-end'>
					<img
						className='w-2/3'
						src='https://amaixico.com/wp-content/uploads/2018/04/frida-18.jpg'
					/>
					<img src='https://blogapi.uber.com/wp-content/uploads/2018/09/MX_Explora-esta-lista-de-X-museos-de-la-Ciudad-de-Me%CC%81xico.jpg' />
				</div>
				<div className='flex flex-col w-full lg:w-6/12 space-y-2'>
					<img src='https://cdn-3.expansion.mx/dims4/default/9373d6f/2147483647/strip/true/crop/1200x800+0+0/resize/1800x1200!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Faa%2F58%2F0a3ce11845dd97eb0c555959b4b0%2Fmuseo-de-antropologia.jpg' />
					<img src='https://ntrzacatecas.com/content/uploads/2016/12/museo-del-estanquillo-3-1000x600.jpg' />
				</div>
			</div>
			<div className='flex flex-col lg:flex-row justify-between relative mt-10 lg:mb-10 lg:right-m-50'>
				<div className='w-full lg:w-1/3 mb-5 lg:mb-0'>
					<div className='flex flex-row items-center c-primary font-medium my-5 pl-5'>
						<div className='pr-5'>Motivación</div>
						<hr
							className='w-1/3 border'
							style={{
								borderColor: style.primaryColor,
							}}
						/>
					</div>
					<div className='text-lg c-primary font-semibold px-5 lg:pl-10'>
						Nada del dinero recaudado se destinará para el portal o
						sus integrantes. Todo el dinero recaudado será donado a
						los museos participantes del proyecto, para que puedan
						seguir con sus puertas abiertas, y será usado para
						cubrir los costos de la plataforma de la experiencia
						para mantener vivo el proyecto.
					</div>
				</div>
				<div className='w-full lg:w-7/12'>
					<img
						className='w-full'
						src='https://pulsosanluisrm.blob.core.windows.net.optimalcdn.com/images/2019/03/26/actividadessoumaya-focus-0-0-696-423.jpg'
					/>
				</div>
			</div>
			<div className='flex flex-col-reverse lg:flex-row justify-between mt-0 px-8 py-10 lg:p-20 bg-gray-100'>
				<div className='w-full lg:w-1/3'>
					Cualquier Persoan que quiera saber sobre el producto puede
					enviar un correo a{''}
					<a href='mailto:faraond1@gmail.com' className='c-primary'>
						faraond1@gmail.com
					</a>
					{''}
					para que inicie el análisis. de viabilidad e implementación.
					{''}
					<br />
					<br />
					Necesitamos emprendedores cualqueir persona será bienvenida.
					{''}
					<br />
					<div className='w-full my-5 lg:my-10'>
						<AnchorLink
							to='/#contacto'
							stripHash={true}
							className='bg-primary text-white rounded-lg p-3 text-xl'
						>
							Contáctanos.
						</AnchorLink>
					</div>
				</div>
				<div className='flex flex-col justify-around w-full lg:w-1/3 text-lg c-primary font-semibold mb-5 lg:mb-0'>
					<div className='text-3xl lg:text-2xl'>¡Participa!</div>
					<div className='text-xl font-medium'>
						¡Divulga nuestro proyecto!
					</div>
					<div className='text-base font-normal'>
						Ayude nuestra microempresa y a las personas que laboran
						por mantenerlas…
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

export default Proyecto;

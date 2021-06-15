import React from 'react';
import Layout from '../components/layout/layout';
// tslint:disable-next-line: no-submodule-imports
import Img from 'gatsby-image/withIEPolyfill';
import { useStaticQuery, graphql, Link } from 'gatsby';
import style from '../variables.module.scss';
import ContactForm from '../components/contact_form';
import Footer from '../components/footer';

export default function index() {
	const data = useStaticQuery(graphql`
		query {
			angelFile: file(relativePath: { eq: "angel.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
			logoFiles: file(relativePath: { eq: "iux-logo.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
			iuxBanner: file(relativePath: { eq: "workspace.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
			sponsor: file(relativePath: { eq: "sponsor_hands.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
			revolucion2: file(relativePath: { eq: "revolucion.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<Img
				className='w-full'
				objectFit='cover'
				fluid={{
					...data.angelFile.childImageSharp.fluid,
					aspectRatio: 3 / 1,
				}}
				style={{ backgroundColor: 'white' }}
				alt='yeguada'
			/>
			<header
				className='p-8 lg:py-12 lg:px-64 flex flex-col italic text-base lg:text-2xl'
				style={{ backgroundColor: style.secondaryDark, color: 'white' }}
			>
				<div>“Encuentra el producto ideal para tu cabello”</div>
				<div className='flex flex-row justify-end'>
					puntochic by angy{'·'}
				</div>
			</header>
			<section
				id='proyecto'
				className='flex flex-col lg:flex-row c-bg-alt break-words justify-between items-center py-5 lg:py-0'
			>
				<div className='flex flex-col justify-end text-2xl w-full lg:w-auto'>
					<hr />
					<span className='p-5 lg:pl-16'>
						Conozca <br className='hidden lg:block' /> Nuestro{' '}
						<br className='hidden lg:block' /> Proyecto
					</span>
				</div>
				<div className='w-full lg:w-auto lg:flex-grow mx-12 lg:my-4 p-5 lg:p-0'>
					<div
						className='relative shadow-2xl'
						style={{ paddingTop: '56.25%' }}
					>
						<iframe
							title='Puntochic. Proyecto'
							className='absolute top-0 w-full h-full'
							src='https://www.youtube.com/embed/VCdkQGgsTZI'
							frameBorder={0}
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen={true}
							loading='lazy'
						/>
					</div>
				</div>
			</section>
			<Link
				id='productos'
				to='/productos'
				className='h-56 flex flex-col justify-center items-center'
				style={{
					color: 'white',
					position: 'relative',
				}}
			>
				<Img
					fluid={{
						...data.iuxBanner.childImageSharp.fluid,
					}}
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						zIndex: -10,
					}}
					objectFit='cover'
					alt='iUX Banner'
				/>
				<span className='text-center text-lg lg:text-4xl uppercase font-bold'>
					Conozca los productos participantes
				</span>
				<span>Click aquí</span>
			</Link>
			<section id='patrocinadores'>
				<hr className='bold' />
				<div className='flex flex-col justify-between items-center py-5 text-xl c-bg-alt font-medium'>
					<div>Nuestros patrocinadores</div>
					<div className='flex flex-col lg:flex-row justify-between items-center w-full'>
						{/* <div className='w-1/3 hidden lg:block'>Manos</div> */}
						<div className='w-1/3 hidden lg:flex flex-row justify-center'>
							<Img
								className='w-2/3'
								objectFit='contain'
								fluid={{
									...data.sponsor.childImageSharp.fluid,
								}}
								alt='sponso'
								fadeIn={true}
							/>
						</div>
						<Img
							className='w-2/3 lg:w-1/6 pt-3'
							objectFit='contain'
							fluid={{
								...data.logoFiles.childImageSharp.fluid,
							}}
							alt='puntoChic Logo'
							fadeIn={true}
						/>
						<div className='hidden lg:flex flex-col w-full lg:w-1/3 items-end'>
							<div className='w-full lg:w-1/2'>
								<hr />
								<div className='w-full pt-5 pr-5 text-right text-2xl'>
									Sea un <br className='hidden lg:block' />{' '}
									socio
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr className='bold' />
			</section>
			<section id='contacto'>
				<div className='flex flex-col relative py-10'>
					<Img
						fluid={{
							...data.revolucion2.childImageSharp.fluid,
						}}
						style={{
							position: 'absolute',
							left: 0,
							top: 0,
							width: '100%',
							height: '100%',
							zIndex: -1000,
						}}
						objectFit='cover'
						alt='iUX Banner'
					/>
					<div className='flex flex-col w-3/4 lg:w-1/6 c-bg-alt'>
						<hr className='mr-10 mb-2' />
						<span className='text-4xl font-medium pl-10 text-right'>
							Contáctanos por facebook
						</span>
					</div>
					<ContactForm />
				</div>
			</section>
			<Footer />
		</Layout>
	);
}

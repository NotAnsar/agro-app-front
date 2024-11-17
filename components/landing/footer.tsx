// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// export default function Footer() {
// 	return (
// 		<footer className='bg-background text-foreground py-8 border-t border-border'>
// 			<div className='container mx-auto px-4'>
// 				<div className='flex-col justify-center sm:flex-row flex sm:justify-between items-center gap-4'>
// 					<div className='text-2xl font-bold text-primary'>Agro App</div>
// 					<div className='flex space-x-4'>
// 						<Image
// 							src='/app_store.svg'
// 							alt='App Store'
// 							width={120}
// 							height={40}
// 						/>
// 						<Image
// 							src='/play_store.svg'
// 							alt='Google Play'
// 							width={120}
// 							height={40}
// 						/>
// 					</div>
// 				</div>
// 				<div className='mt-4 flex-col sm:flex-row flex justify-center sm:justify-between text-muted-foreground gap-4'>
// 					<div className='flex flex-col sm:flex-row gap-4 justify-center text-center'>
// 						<Link href='#'>Politique de confidentialité</Link>
// 						<Link href='#'>Conditions générales</Link>
// 					</div>
// 					<div className='text-sm text-center sm:text-left'>
// 						<Link href='#'>Contactez-nous</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='border-t border-border'>
			<div className='max-w-screen-xl mx-auto py-12 px-8 w-full '>
				<div className='flex-col gap-12 md:flex-row flex justify-between'>
					<div className='flex flex-col gap-3'>
						<div className='flex gap-2 cursor-pointer group items-center'>
							<Link
								href={'/'}
								className='cursor-pointer text-3xl font-semibold text-main'
							>
								Agro App
							</Link>
						</div>
						<p className='text-[15px] text-muted-foreground w-full sm:w-[450px] mb-4'>
							{
								"Réussissons ensemble votre transformation digitale avec Agroapp, l'application dédiée à la méthode HACCP et au Plan de Maîtrise Sanitaire de Mérieux NutriSciences, leader mondial en sécurité et hygiène alimentaire !"
							}
						</p>

						<div className='mb-4 flex gap-4'>
							<Image
								src='/app_store.svg'
								alt='App Store'
								width={120}
								height={40}
							/>
							<Image
								src='/play_store.svg'
								alt='Google Play'
								width={120}
								height={40}
							/>
						</div>
					</div>
					<div className='flex gap-12'>
						<ul className='text-sm text-muted-foreground flex flex-col gap-4 font-medium'>
							<li className='text-xs mb-1.5 font-semibold uppercase text-main'>
								Pages
							</li>
							{Links.map((l) => (
								<li
									className='hover:text-main transition-all ease-in duration-300 cursor-pointer'
									key={l.label}
								>
									<Link href={l.link}>{l.label}</Link>
								</li>
							))}
						</ul>
						<ul className='text-sm text-muted-foreground flex flex-col gap-4 font-medium'>
							<li className='text-xs font-semibold uppercase text-main mb-1.5'>
								Legal
							</li>
							{LEGAL.map((l) => (
								<li
									className='hover:text-main transition-all ease-in duration-300 cursor-pointer'
									key={l.label}
								>
									<Link href={l.path}>{l.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<p className='mt-4 text-center text-sm w-full text-muted-foreground/80'>
					© 2024 Agro App. Tous droits réservés.
				</p>
			</div>
		</footer>
	);
}

const LEGAL = [
	{
		label: 'Politique de confidentialité',
		path: '/terms/politique-de-confidentialite',
	},
	{ label: 'Politique de Cookies', path: '/terms/politique-de-cookie' },
];

export const Links = [
	{ label: 'Accueil', link: '/#accueil' },
	{ label: 'Fonctionnalités', link: '/#fonctionnalites' },
	{ label: 'Témoignages', link: '/#temoignages' },
	{ label: 'Contact', link: '/#contact' },
];

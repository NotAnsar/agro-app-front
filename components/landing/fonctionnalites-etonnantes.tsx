import React from 'react';
import { User, Bell, BarChart, Cloud } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function FonctionnalitesEtonnantes() {
	return (
		<section className='py-16'>
			{/* <div className='wrapper mx-auto px-4 bg-foreground/5 px-8 py-12 rounded-3xl'> */}
			<div className='wrapper mx-auto bg-foreground/5 px-14 py-12 md:py-16 md:rounded-2xl border-border border'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div className='grid gap-2'>
						<div className='mb-8'>
							<h2 className='text-3xl font-medium mb-1'>
								Fonctionnalités <span className='text-main'>étonnantes</span>
							</h2>
							<p className='text-muted-foreground'>
								Explorez les capacités uniques qui définissent notre solution.
							</p>
						</div>
						<div className='grid gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 '>
							{features.map(({ description, icon: Icon, title }, index) => (
								<div key={index} className='flex gap-3 '>
									<div className='bg-main p-3 rounded-md text-2xl text-primary h-fit'>
										<Icon className='h-auto w-5 aspect-square text-white' />
									</div>
									<div>
										<h2 className='font-semibold mb-1'>{title}</h2>
										<p className='text-muted-foreground text-sm'>
											{description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='flex items-center justify-center '>
						<div className='relative w-full h-[400px]'>
							<Image
								src='/mobile.png'
								alt='Application screenshot'
								layout='fill'
								objectFit='contain'
								className='md:mt-12'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const features = [
	{
		title: 'Relevés de température',
		description:
			'Suivi des températures des chambres froides avec alertes et rapports',
		icon: BarChart,
	},
	{
		title: 'Traçabilité alimentaire digitalisée',
		description: 'Gestion des bons de livraison et suivi des non-conformités',
		icon: User,
	},
	{
		title: 'Organisation du plan de nettoyage',
		description: 'Paramétrage des zones et allocation des tâches aux équipes',
		icon: Bell,
	},
	{
		title: 'Application mobile et web',
		description: 'Solution complète accessible sur mobile et navigateur',
		icon: Cloud,
	},
];

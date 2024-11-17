import {
	Thermometer,
	Utensils,
	Clipboard,
	Tag,
	BarChart,
	Droplet,
} from 'lucide-react';
import React from 'react';
import SectionTitles from './section-titles';
import Image from 'next/image';

export default function Fonctionnalites() {
	return (
		<section className='py-20 wrapper' id='fonctionnalites'>
			<SectionTitles
				description='Découvrez nos solutions innovantes conçues pour répondre à vos besoins spécifiques, intégrant une technologie de pointe pour des performances et des résultats exceptionnels.'
				header='Fonctionnalités'
				title='Fonctionnalités clés'
			/>
			<div className='grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 text-left'>
				{features.slice(0, 4).map((f) => (
					<div
						key={f.title}
						className='flex flex-col gap-2 rounded-lg p-6 border border-border bg-foreground/5'
					>
						<f.icon className='text-main' />
						<h3 className='font-medium text-foreground text-xl'>{f.title}</h3>
						<p className='text-sm text-muted-foreground mb-1.5'>
							{f.description}
						</p>
						<Image
							src={f.image}
							alt='feature'
							width={1200}
							height={600}
							className='w-full h-auto rounded-md border border-border mt-auto'
						/>
					</div>
				))}
			</div>
		</section>
	);
}

const features = [
	{
		icon: BarChart,
		title: 'Tableau de bord analytique',
		description:
			'Visualisez vos données en temps réel pour une analyse approfondie et une prise de décision éclairée',
		image: '/analytics.png',
	},
	{
		icon: Thermometer,
		title: 'Relevés de température',
		description:
			'Suivez les températures des chambres froides avec précision pour garantir la sécurité alimentaire et optimiser la conservation.',
		image: '/chambre.png',
	},
	{
		icon: Utensils,
		title: 'Traçabilité alimentaire',
		description:
			"Digitalisez les bons de livraison et suivez les dates d'expiration",
		image: '/tracability.png',
	},
	{
		icon: Clipboard,
		title: 'Plan de nettoyage',
		description:
			'Organisez et suivez vos tâches de nettoyage avec un planning interactif et un calendrier intégré pour une gestion efficace.',
		image: '/calendar.png',
	},
	{
		icon: Droplet,
		title: 'Contrôle des huiles',
		description: "Surveillez la qualité et les changements d'huile",
		image: '/dash-dark.png',
	},
	{
		icon: Tag,
		title: 'Étiquetage',
		description:
			"Automatisez les étiquettes de dates d'expiration et les alertes",
		image: '/dash-dark.png',
	},
];

import React from 'react';
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Card,
} from '../ui/card';
import { Quote } from 'lucide-react';
import SectionTitles from './section-titles';

export default function Temoignages() {
	return (
		<section className='py-20 wrapper' id='temoignages'>
			<SectionTitles
				description="Découvrez les expériences de nos clients avec Agro App. Leurs témoignages illustrent l'impact concret de notre solution sur la sécurité alimentaire."
				header='temoignages'
				title='Témoignages'
			/>

			<div className='grid grid-cols-1 xl:grid-cols-3 gap-6 text-left'>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} {...testimonial} />
				))}
			</div>
		</section>
	);
}

const TestimonialCard = ({
	name,
	role,
	content,
}: {
	name: string;
	role: string;
	content: string;
}) => (
	<Card className='h-full'>
		<CardHeader>
			<Quote className='h-8 w-8 mb-2 text-main' />
			<CardTitle>{name}</CardTitle>
			<CardDescription>{role}</CardDescription>
		</CardHeader>
		<CardContent>
			<p className='text-foreground'>{content}</p>
		</CardContent>
	</Card>
);

const testimonials = [
	{
		name: 'Marie Dubois',
		role: 'Propriétaire de restaurant',
		content:
			"Cette application a révolutionné notre gestion de l'hygiène. Elle est facile à utiliser et nous a aidés à maintenir des normes de sécurité alimentaire cohérentes.",
	},
	{
		name: 'Pierre Martin',
		role: 'Responsable de boulangerie',
		content:
			'La fonction de suivi de la température a été un véritable changement pour nous. Nous avons considérablement réduit le gaspillage alimentaire et amélioré notre contrôle qualité global.',
	},
	{
		name: 'Sophie Leclerc',
		role: 'Responsable qualité en restauration collective',
		content:
			"L'organisation du plan de nettoyage et la checklist ont grandement simplifié notre gestion quotidienne. C'est un outil indispensable pour notre équipe.",
	},
];

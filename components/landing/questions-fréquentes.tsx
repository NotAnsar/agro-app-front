import React from 'react';
import FAQ from './faq';
import SectionTitles from './section-titles';

export default function QuestionsFréquentes() {
	return (
		<section className='py-20 wrapper !max-w-screen-lg' id='faq'>
			<SectionTitles
				header='FAQ'
				description='Trouvez rapidement des réponses à vos questions sur nos produits et services innovants. Nous sommes là pour vous aider à comprendre nos solutions'
				title='Questions fréquentes'
			/>
			<div className='grid gap-4'>
				{faqs.map((f, i) => (
					<FAQ answer={f.answer} question={f.question} key={i} />
				))}
			</div>
		</section>
	);
}

const faqs = [
	{
		question:
			"Comment fonctionne le suivi de la température dans l'application?",
		answer:
			'Notre application permet de relever facilement les températures des chambres froides, de suivre les variations via des courbes, et de recevoir des alertes en cas de changement. Vous pouvez également générer des rapports Excel et PDF.',
	},
	{
		question: "L'application est-elle disponible sur mobile et ordinateur?",
		answer:
			'Oui, notre application est disponible à la fois sur appareils mobiles (iOS et Android) et comme application web pour ordinateur.',
	},
	{
		question: "Comment l'application aide-t-elle à la traçabilité alimentaire?",
		answer:
			"L'app permet de sauvegarder les bons de livraison, d'enregistrer les températures de réception, de paramétrer des alertes d'expiration DLC/DDM, et de suivre les non-conformités.",
	},
];

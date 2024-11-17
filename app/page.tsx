import React from 'react';
import Hero from '@/components/landing/hero';
import Fonctionnalites from '@/components/landing/fonctionnalites';
import Temoignages from '@/components/landing/témoignages';
import QuestionsFréquentes from '@/components/landing/questions-fréquentes';
import Contact from '@/components/landing/contact';
import FonctionnalitesEtonnantes from '@/components/landing/fonctionnalites-etonnantes';
import CTASection from '@/components/landing/cta-section';

const LandingPage = () => {
	return (
		<>
			<Hero />
			<Fonctionnalites />
			<FonctionnalitesEtonnantes />
			<QuestionsFréquentes />
			<Temoignages />
			<Contact />
			<CTASection />
			{/* <CTASection /> */}
		</>
	);
};

export default LandingPage;

import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div className='text-left'>
			<h1 className='text-2xl font-medium mb-8'>
				Politique de Traitement des Données
			</h1>
			<div className='space-y-8'>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Introduction</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Cette politique de traitement des données explique comment Agro App
						traite et protège vos informations personnelles conformément aux
						réglementations en vigueur.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Responsable du Traitement</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Agro App agit en tant que responsable du traitement des données
			et est responsable de la collecte, de l'utilisation et de la
			protection de vos informations personnelles.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Données Collectées</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Nous collectons des informations telles que votre nom, adresse
						e-mail, numéro de téléphone, ainsi que des données de suivi des
						produits via notre application mobile et notre logiciel cloud.
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Finalités du Traitement</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Les données collectées sont utilisées pour fournir nos services,
						améliorer leur qualité, assurer la sécurité des données, et
						personnaliser votre expérience utilisateur.
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Base Juridique du Traitement</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Nous traitons vos données sur la base de votre consentement
			explicite et/ou pour l'exécution d'un contrat avec vous, ainsi que
			pour respecter nos obligations légales.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Partage des Données</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Nous ne partageons vos informations qu'avec des tiers dans les cas
			prévus par la loi ou lorsque cela est nécessaire pour la prestation
			de services en notre nom.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Sécurité des Données</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos informations contre tout accès non autorisé, utilisation abusive, perte ou destruction.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Conservation des Données</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Nous conservons vos informations aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique, sauf si une période de conservation plus longue est requise par la loi.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Vos Droits</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Vous avez le droit d'accéder, de rectifier, de supprimer ou de limiter l'utilisation de vos données personnelles. Vous pouvez également retirer votre consentement à tout moment.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Modifications de la Politique</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Nous révisons régulièrement notre politique de traitement des données et nous vous informerons de toute modification importante par le biais de notre site Web ou par d'autres moyens de communication appropriés.`}
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Contactez-Nous</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{
							"Pour toute question ou préoccupation concernant notre politique de confidentialité, n'hésitez pas à nous contacter :"
						}
					</p>
					<ul className='space-y-2.5 list-disc ms-6 list-red marker:text-primary'>
						<li>
							Email:{' '}
							<Link
								href={'mailto:contact@contact@agroapp.com'}
								className='text-primary underline'
							>
								contact@agroapp.com
							</Link>
						</li>
						<li>
							Téléphone:{' '}
							<Link
								href={'tel:+2126612-345678'}
								className='text-primary underline'
							>
								0612-345678
							</Link>
						</li>
						<li>Adresse: 2ème étage bureau N° T227, Tanger 90000.</li>
					</ul>
				</section>
			</div>
		</div>
	);
}

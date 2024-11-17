import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div className='text-left'>
			<h1 className='text-2xl font-medium mb-8'>Politique de Cookies</h1>
			<div className='space-y-8'>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Utilisation des Cookies</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Les cookies sont de petits fichiers texte placés sur votre appareil
						pour améliorer votre expérience utilisateur. Nous utilisons des
						cookies pour analyser le trafic de notre site, personnaliser le
						contenu et les publicités, et assurer le bon fonctionnement de notre
						site.
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Types de Cookies Utilisés</h2>

					<ul className='space-y-2.5 list-disc ms-6 list-red marker:text-primary text-muted-foreground tracking-wide'>
						<li>
							Cookies Essentiels: Nécessaires pour le fonctionnement du site.
						</li>
						<li>
							Cookies de Performance: Utilisés pour analyser la manière dont les
							visiteurs utilisent notre site.
						</li>
						<li>
							Cookies de Fonctionnalité: Permettent de se souvenir de vos choix
							et préférences.
						</li>
						<li>
							Cookies de Ciblage: Utilisés pour diffuser des publicités
							pertinentes pour vous.
						</li>
					</ul>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Contrôle des Cookies</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Vous pouvez gérer vos préférences en matière de cookies via les
						paramètres de votre navigateur. Vous pouvez également utiliser notre
						outil de gestion des cookies pour ajuster vos préférences.
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Consentement aux Cookies</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`En utilisant notre site, vous consentez à l'utilisation des cookies
						conformément à cette politique. Vous pouvez retirer votre
						consentement à tout moment en modifiant les paramètres de votre
						navigateur.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>
						Modifications de la Politique de Cookies
					</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{
							'Toute modification apportée à cette politique de cookies sera communiquée via notre site Web et nos canaux de communication habituels.'
						}
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
								href={'mailto:contact@agroapp.com'}
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

import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div className='text-left'>
			<h1 className='text-2xl font-medium mb-8'>
				Politique de Propriété Intellectuelle
			</h1>
			<div className='space-y-8'>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>
						Droits de Propriété Intellectuelle
					</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Agro App reconnaît et respecte les droits de propriété
						intellectuelle (PI) de tiers ainsi que ses propres droits sur ses
						créations originales.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Droits de Agro App</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Tous les contenus et éléments créés par Agro App, tels que le logiciel, le contenu graphique, les textes et autres matériaux, sont protégés par les lois sur la propriété intellectuelle.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Utilisation des Contenus</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Vous êtes autorisé à utiliser les contenus fournis par Agro App
						conformément aux conditions spécifiées dans nos conditions
						d'utilisation ou par un accord écrit préalable.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>
						Protection des Droits des Tiers
					</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Nous respectons les droits de propriété intellectuelle des tiers et
						demandons à nos utilisateurs de faire de même. Toute violation
						présumée de droits d'auteur ou de marque sera traitée sérieusement.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Notifications de Violation</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Si vous croyez que du contenu disponible sur Agro App viole vos droits de propriété intellectuelle, veuillez nous en informer immédiatement pour que nous puissions prendre les mesures appropriées.`}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Modifications de la Politique</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{`Cette politique de propriété intellectuelle peut être mise à jour périodiquement. Les modifications seront publiées sur notre site Web ou vous seront communiquées d'une autre manière.`}
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

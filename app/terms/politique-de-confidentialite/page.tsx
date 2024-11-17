import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div className='text-left'>
			<h1 className='text-2xl font-medium mb-8'>
				Politique de Confidentialité
			</h1>
			<div className='space-y-8'>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Introduction</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Bienvenue sur Agro App. Nous attachons une grande importance à la
						protection de vos informations personnelles. Cette politique de
						confidentialité vous informe sur la manière dont nous collectons,
						utilisons et protégeons vos données.
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Collecte des Informations</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Nous collectons des informations personnelles telles que votre nom,
						votre adresse e-mail et votre numéro de téléphone, ainsi que des
						données de suivi liées à nos produits à travers notre application
						mobile et notre site web.
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Utilisation des Informations</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Les informations collectées sont utilisées pour améliorer nos
						services, assurer la sécurité de nos données et personnaliser votre
						expérience utilisateur.
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Partage des Informations</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{
							"Nous ne partageons vos informations qu'avec des tiers que dans les cas où cela est nécessaire, tels que le respect des obligations légales ou la fourniture de services."
						}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Sécurité des Données</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{
							"Nous mettons en œuvre des mesures de sécurité strictes, y compris le chiffrement des données et l'accès restreint, pour protéger vos informations personnelles."
						}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>Vos Choix et Contrôles</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						{
							"Vous avez le droit d'accéder, de mettre à jour ou de supprimer vos informations personnelles à tout moment en nous contactant."
						}
					</p>
				</section>
				<section className='space-y-4'>
					<h2 className='text-xl font-medium'>
						Modifications de la Politique de Confidentialité
					</h2>
					<p className='text-muted-foreground tracking-wide leading-relaxed'>
						Toute modification apportée à cette politique de confidentialité
						sera communiquée via notre site Web et nos canaux de communication
						habituels.
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

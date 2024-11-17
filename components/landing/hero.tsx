import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
	return (
		<section className='py-12 sm:py-20 relative z-0 wrapper' id='accueil'>
			<div className='h-52 w-4/6 sm:h-96 bg-main/85 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2  right-1/3 blur-[350px] rounded-full -z-10  hidden dark:block' />
			<div className='text-center'>
				<div className='text-wrap sm:text-nowrap text-xs px-2 py-2 rounded-full inline-flex items-center gap-2 text-foreground relative border border-border mb-4 bg-main/20 '>
					<span className='aspect-square w-2 sm:w-[9px] h-auto relative flex'>
						<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75' />
						<span className='relative inline-flex rounded-full aspect-square w-2 h-auto bg-main sm:w-[9px]' />
					</span>
					<span className='block absolute inset-0 rounded-full p-px linear-overlay ' />
					<p>{"Sécurité alimentaire en un coup d'œil"}</p>
				</div>
				<h1
					className='text-4xl sm:text-5xl font-extrabold text-foreground mb-4 '
					style={{ lineHeight: 1.15 }}
				>
					{"Gestion de l'hygiène et de la traçabilité alimentaire"}
				</h1>
				<p className='text-xl text-muted-foreground mb-8'>
					Optimisez vos processus de sécurité alimentaire avec notre application
					mobile et web complète
				</p>
				<div className='flex-col sm:flex-row flex justify-center gap-2 '>
					<Link
						href={'/register'}
						className={cn(
							buttonVariants({ variant: 'main', size: 'rounded' }),
							'flex gap-1.5 items-center w-full sm:w-auto '
						)}
					>
						{'Demander une démo'}
					</Link>

					<Button
						variant={'input'}
						size={'rounded'}
						className={cn('w-full sm:w-auto')}
					>
						Telecharger
					</Button>
				</div>
			</div>
			<div className='mt-8 hidden sm:block'>
				<Image
					src='/dash-dark.png'
					alt='dashboard'
					width={1920}
					height={970}
					className=' rounded-2xl border-2 border-card shadow-2xl hidden dark:block'
				/>
				<Image
					src='/dash-light.png'
					alt='dashboard'
					width={1920}
					height={970}
					className='rounded-2xl border border-border shadow-xl dark:hidden '
				/>
			</div>
		</section>
	);
}

import React from 'react';
import { buttonVariants } from '../ui/button';
import { ModeToggle } from '../mode-toggle';
import Link from 'next/link';
import { Links } from './footer';
import { NavMobile } from './nav-mobile';
import { cn } from '@/lib/utils';

export default async function Header() {
	return (
		<header className='shadow-sm fixed top-0 z-10 border-b border-border w-full backdrop-blur-sm '>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='flex items-center'>
					<Link
						href={'/'}
						className='text-2xl font-bold text-main cursor-pointer'
					>
						Agro App
					</Link>
				</div>
				<nav className='hidden md:block px-6 py-2'>
					<ul className='flex space-x-6 text-sm'>
						{Links.map((l) => (
							<li key={l.label}>
								<a
									href={l.link}
									className='text-muted-foreground hover:text-main'
								>
									{l.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className='flex gap-2 items-center'>
					<Link
						href={'/'}
						className={cn(
							buttonVariants({ variant: 'main', size: 'rounded' }),
							'hidden md:flex h-9 px-4'
						)}
					>
						Connexion
					</Link>
					<NavMobile />
					<ModeToggle variant={'ghost'} />
				</div>
			</div>
		</header>
	);
}

import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { Building, Download } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function CTASection() {
	return (
		<section className='py-16 text-center '>
			<h2 className='text-3xl font-bold mb-4'>
				Voulez-vous tester notre application ?
			</h2>
			<p className='md:text-lg text-muted-foreground mb-4'>
				{
					'Rejoignez-nous pour découvrir comment notre application peut optimiser vos processus.'
				}
			</p>
			<Link
				href={'/register'}
				className={cn(
					buttonVariants({ size: 'rounded', variant: 'main' }),
					'flex gap-1.5 items-center mx-auto text-white hover:text-white w-fit'
				)}
			>
				{'Tester Notre Application'}
			</Link>
		</section>
	);
}

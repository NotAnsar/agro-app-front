import { cn } from '@/lib/utils';
import React from 'react';

export default function SectionTitles({
	title,
	description,
	header,
	className,
}: {
	title: string;
	description: string;
	header: string;
	className?: string;
}) {
	return (
		<div className={cn('text-center mb-16', className)}>
			<h5 className='uppercase text-sm font-bold text-main'>{header}</h5>
			<h2 className='mt-3 mb-2.5 text-3xl md:text-4xl font-medium'>{title}</h2>
			<p className='text-sm sm:text-[15px] text-muted-foreground w-4/5 mx-auto'>
				{description}
			</p>
		</div>
	);
}

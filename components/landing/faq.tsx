'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function FAQ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) {
	const [open, setopen] = useState(false);

	return (
		<div
			className={cn(
				'bg-foreground/5 py-5 px-6 duration-300 transition-all rounded-md ease-out border-border border',
				open ? 'border-main/70 ' : ''
			)}
		>
			<div
				className='flex justify-between cursor-pointer items-center gap-4'
				onClick={() => setopen((a) => !a)}
			>
				<p className='md:text-lg font-medium'>{question}</p>
				<button
					className={cn(
						{ 'rotate-[135deg]': open },
						'duration-300 transition-all ease-in'
					)}
				>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-foreground'
					>
						<path
							d='M4.16675 10H15.8334'
							stroke='currentColor'
							strokeWidth='1.66667'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M10 4.1665V15.8332'
							stroke='currentColor'
							strokeWidth='1.66667'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
			<p
				className={cn(
					'text-sm text-gray-400 overflow-hidden transition-all duration-300',
					open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
				)}
			>
				{answer}
			</p>
		</div>
	);
}

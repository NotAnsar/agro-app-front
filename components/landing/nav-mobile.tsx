import { Menu } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { Links } from './footer';

export async function NavMobile() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon' className='shrink-0 md:hidden'>
					<Menu className='h-7 w-auto aspect-square' />
					<span className='sr-only'>Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='flex flex-col'>
				<SheetTitle className='mt-5 sr-only'>Responsive Navigation</SheetTitle>

				<SheetDescription className='sr-only'>
					Main navigation links
				</SheetDescription>

				<nav
					className='grid gap-2.5 text-lg font-medium mt-8 '
					aria-label='Main Navigation'
				>
					{Links.map((link) => {
						return (
							<SheetClose asChild key={link.label}>
								<Link
									href={link.link}
									className={cn(
										'hover:text-main/90 flex items-center justify-between text-[15px] border border-transparent p-3 rounded-xl '
									)}
								>
									{link.label}
								</Link>
							</SheetClose>
						);
					})}
				</nav>

				<Link
					href={'/'}
					className={cn(
						buttonVariants({ variant: 'main', size: 'rounded' }),
						'mt-auto w-full text-center flex h-10 px-4'
					)}
				>
					Connexion
				</Link>
			</SheetContent>
		</Sheet>
	);
}

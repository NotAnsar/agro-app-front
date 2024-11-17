'use client';

import React, { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader, Send } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { ContactState, submitContact } from '@/actions/contact-action';
import SectionTitles from './section-titles';
import Image from 'next/image';

const initialState: ContactState = {
	message: null,
	errors: {},
};

export default function Contact() {
	const { toast } = useToast();
	const formRef = useRef<HTMLFormElement>(null);

	const [state, formAction] = useFormState<ContactState, FormData>(
		submitContact,
		initialState
	);

	useEffect(() => {
		if (state.message) {
			toast({
				description: state.message,
				title: state?.success ? 'Success' : 'Error',
				variant: state?.success ? 'success' : 'destructive',
				duration: 5000,
			});
			if (formRef.current && state.success) {
				formRef.current.reset();
			}
		}
	}, [state, toast]);

	return (
		<section id='contact' className='py-20 wrapper'>
			<div className='container mx-auto px-4 '>
				<SectionTitles
					description="Vous avez des questions ou des commentaires? N'hésitez pas à nous contacter."
					header='Contact'
					title='Nous sommes là pour vous aider'
					className='mb-8'
				/>

				<div className='grid md:grid-cols-2 gap-6'>
					<div className='md:p-12'>
						<Image
							src={'/hello.svg'}
							alt='Contactez-nous'
							width={500}
							height={500}
							className='w-full h-auto '
						/>
					</div>
					<div className='w-full mx-auto md:mt-6'>
						<form ref={formRef} action={formAction}>
							<div className='mb-4 grid md:grid-cols-2 gap-4'>
								<div>
									<Input
										type='text'
										name='name'
										placeholder='Nom'
										required
										className={cn(state.errors?.name && 'border-destructive')}
									/>
									{state.errors?.name && (
										<p className='text-destructive text-sm mt-1'>
											{state.errors.name[0]}
										</p>
									)}
								</div>
								<div>
									<Input
										type='email'
										name='email'
										placeholder='Email'
										required
										className={cn(state.errors?.email && 'border-destructive')}
									/>
									{state.errors?.email && (
										<p className='text-destructive text-sm mt-1'>
											{state.errors.email[0]}
										</p>
									)}
								</div>
							</div>

							<div className='mb-4'>
								<Input
									type='text'
									name='subject'
									placeholder='Sujet'
									required
									className={cn(state.errors?.subject && 'border-destructive')}
								/>
								{state.errors?.subject && (
									<p className='text-destructive text-sm mt-1'>
										{state.errors.subject[0]}
									</p>
								)}
							</div>
							<div className='mb-4'>
								<Textarea
									name='message'
									placeholder='Message'
									required
									className={cn(
										'min-h-24',
										state.errors?.message && 'border-destructive'
									)}
								/>
								{state.errors?.message && (
									<p className='text-destructive text-sm mt-1'>
										{state.errors.message[0]}
									</p>
								)}
							</div>
							<SubmitButton />
						</form>
						{state.message && !state.success && (
							<p
								className={`mt-3 text-[15px] ${
									state.success ? 'text-green-500' : 'text-destructive'
								}`}
							>
								{state.message}
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			disabled={pending}
			type='submit'
			variant={'main'}
			className='w-full !text-white flex gap-2'
		>
			{pending ? (
				<Loader className='w-4 h-auto aspect-square animate-spin' />
			) : (
				<Send className='w-4 h-auto aspect-square' />
			)}
			Contacter avec nous !
		</Button>
	);
}

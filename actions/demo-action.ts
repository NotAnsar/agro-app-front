'use server';

import { getDemoEmailString, getEmailString, sendEmail } from '@/lib/email';
import { z } from 'zod';

const DemoRequestSchema = z.object({
	NomComplet: z.string().min(1, { message: 'Le nom complet est requis' }),
	Email: z.string().email({ message: 'Adresse email invalide' }),
	Telephone: z
		.string()
		.min(1, { message: 'Le numéro de téléphone est requis' }),
	Pays: z.string().min(1, { message: 'Le pays est requis' }),
	TypeDeProjet: z.string().min(1, { message: 'Le type de projet est requis' }),
	Message: z.string().min(1, { message: 'Le message est requis' }),
});

type DemoFormData = z.infer<typeof DemoRequestSchema>;
export type DemoState = {
	errors?: { [K in keyof DemoFormData]?: string[] };
	success?: boolean;
	message?: string;
};

export async function createDemoRequest(
	prevState: DemoState,
	formData: FormData
): Promise<DemoState> {
	const validatedFields = DemoRequestSchema.safeParse({
		NomComplet: formData.get('NomComplet'),
		Email: formData.get('Email'),
		Telephone: formData.get('Telephone'),
		Pays: formData.get('Pays'),
		TypeDeProjet: formData.get('TypeDeProjet'),
		Message: formData.get('Message'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Validation échouée',
		};
	}

	try {
		const { NomComplet, Email, Telephone, Pays, TypeDeProjet, Message } =
			validatedFields.data;

		const subject = `Nouvelle demande de démonstration de ${NomComplet}`;
		const emailBody = getDemoEmailString(
			subject,
			NomComplet,
			Email,
			Telephone,
			Pays,
			TypeDeProjet,
			Message
		);

		await sendEmail({
			subject,
			body: emailBody,
			name: NomComplet,
			from: Email,
		});
		return {
			message: 'Demande de démonstration envoyée avec succès!',
			success: true,
		};
	} catch (error) {
		console.error("Échec de l'envoi de la demande de démonstration:", error);
		return {
			message: "Échec de l'envoi de la demande. Veuillez réessayer plus tard.",
			success: false,
		};
	}
}

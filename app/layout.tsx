import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';

const fontSans = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = { title: 'Agro App' };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <h4>dlöslödlsä</h4>;
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body className={fontSans.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<div>
						<Header />
						<main className='mt-[72px] '>{children}</main>
						<Footer />
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}

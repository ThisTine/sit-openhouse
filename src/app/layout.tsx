import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/share/components/NavBar';
import Footer from '@/share/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SIT Openhouse',
	description: 'Hello'
};

export default function RootLayout({
	children
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar/>
				<main className='min-w-full min-h-screen'>
					{children}
				</main>
				<Footer/>
			</body>
		</html>
	);
}

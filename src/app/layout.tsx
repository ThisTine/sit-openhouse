import type { Metadata } from 'next';
import {  Roboto_Flex, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import NavBar from '@/share/components/NavBar';
import Footer from '@/share/components/Footer';

const roboto = Roboto_Flex({subsets:["latin"]});
const noto = Noto_Sans_Thai({subsets:["latin"]});

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
			<body style={{fontFamily: `${roboto.style.fontFamily}, ${noto.style.fontFamily}`}}>
				<NavBar/>
				<main className='min-h-screen min-w-full'>
					{children}
				</main>
				<Footer/>
			</body>
		</html>
	);
}

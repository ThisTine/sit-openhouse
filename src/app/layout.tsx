import type { Metadata } from 'next';
import { Roboto_Flex, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import NavBar from '@/share/components/NavBar';
import Footer from '@/share/components/Footer';
import { Suspense } from 'react';

const roboto = Roboto_Flex({ subsets: ["latin"] });
const noto = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'SIT Openhouse | ICT Chllenge | D-Day',
	description: `🏣 SIT Open House 2023 งานเปิดบ้านคณะเทคโนโลยีสารสนเทศ พบกับกิจกรรม Workshop สุดพิเศษ และแนะแนวหลักสูตรจากรุ่นพี่ทั้ง 3 สาขา IT CS และ DSI
	📱ICT Challenge 2023 การแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ ระดับมัธยมศึกษาตอนปลาย ชิงทุนการศึกษา และรับเกียรติบัตร
	 🗂 CS Project D-Day 2023 งานแสดงผลงานนักศึกษาหลักสูตร comsci inter ชั้นปีที่ 4`
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body style={{ fontFamily: `${roboto.style.fontFamily}, ${noto.style.fontFamily}` }}>
				<NavBar />
				<main className='min-h-screen min-w-full'>
					<Suspense fallback={<>suspense</>}>
						{children}
					</Suspense>
				</main>
				<Footer />
			</body>
		</html>
	);
}
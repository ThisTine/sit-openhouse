'use client';
import React, { use, useContext, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './globals.css';

// import required modules
import { Pagination } from 'swiper/modules';

// import Ict from '@/share/views/Ict';
import PageView from '@/share/views/PageView';
import Ict from 'public/images/ICT2022_3.jpg';
import OpenHouse from 'public/images/openHouse.jpg';
import Cs from 'public/images/cs.jpg';
import { HomeView } from '@/share/views/HomeView';
import OpenHousePage from '@/share/components/OpenHouse';
import IctChallenge from '@/share/components/Ict_Challenge';
import CsDday from '@/share/components/Cs_Dday';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const slider = [
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: OpenHouse,
		subtitle: "งานเปิดบ้านคณะเทคโนโลยีสารสนเทศ ครั้งแรกในรอบ 5 ปีกับงานเปิดบ้านเพื่อน้อง ๆ  มัธยมปลายที่สนใจในคณะเทคโนโลยีสารสนเทศ และสาขาทั้งหมดภายในคณะมาทำความรู้จักกันได้ผ่าน เวิร์คช็อปสุดพิเศษจากรุ่นพี่ SIT, ช่วงการบรรยายสุดพิเศษจากวิทยากรรับเชิญ, บูทประจำสาขา และกิจกรรมอื่นๆอีกมากมาย",
		title: "OPEN HOUSE@SIT",
		location: "ชั้น 1 และ 10 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		showButton: true,
		moreDetails: <OpenHousePage />,
		// buttonText: "เปิดรับสมัครเร็ว ๆ นี้",
		href: "/register/open-house"
	},
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: Ict,
		subtitle: "ลับสมองประลองปัญญา กับการแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ICT Challenge 2023 เวทีสำหรับน้อง ๆ ระดับมัธยมปลายที่มีความสนใจทางด้านคอมพิวเตอร์และต้องการทดสอบความสามารถตนเองที่จะมาไขปัญหาทางด้านไอที พร้อมชิงรางวัลทุนการศึกษากว่า 10,000 บาท",
		title: "ICT CHALLENGE 2023",
		location: "Auditorium ชั้น 3 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		showButton: true,
		showLicense: true,
		moreDetails: <IctChallenge />,
		href: "/register/ict-challenge"
	},
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: Cs,
		subtitle: "นิทรรศการจัดแสดงผลงานของนักศึกษาชั้นปีที่ 4 หลักสูตรวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ) คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี รวบรวมผลงานหลากหลายประเภทกว่า 16 ชิ้น จากความต้องการในกระดาษสู่ผลงานที่ใช้งานได้จริง",
		title: "CS PROJECT D-DAY EXHIBITION 2023",
		location: "ชั้น 3 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		ShadowRoot: false,
		moreDetails: <CsDday />
	}
];

export default function App() {

	const [swiper, setSwiper] = useState<any>();

	const slideTo = (index: number) => {
		if (swiper && swiper.initialized) {
			swiper.slideTo(index);
		}
	};

	const handleClick = (page: number) => {
		slideTo(page);
	};

	const router = useRouter();
	const path = usePathname();
	const param = new URLSearchParams(useSearchParams());

	const activeSwiper = (swiper: any) => {
		// set new value to param
		param.set('page', swiper.activeIndex.toString() === 'NaN' ? '0' : swiper.activeIndex.toString());
		router.replace(path + '?' + param.toString());
	};

	useEffect(() => {
		slideTo(parseInt(param.get('page') as string));
	});

	return (
		<Swiper className='swiper-backface-hidden' modules={[Pagination]} onActiveIndexChange={activeSwiper} onSwiper={setSwiper} pagination={{
			clickable: true,
			bulletClass: 'swiper-pagination-bullet',
			bulletActiveClass: 'swiper-pagination-bullet-active'
		}}>
			<SwiperSlide>
				<HomeView PageView={handleClick} />
			</SwiperSlide>
			{
				slider.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<PageView
								buttonText={slide.buttonText}
								details={slide.details}
								href={slide.href}
								imageUrl={slide.imageUrl}
								location={slide.location}
								moreDetails={slide.moreDetails}
								showButton={slide.showButton}
								showLicense={slide.showLicense}
								subtitle={slide.subtitle}
								title={slide.title}
							/>
						</SwiperSlide>
					);
				})
			}
		</Swiper>
	);
}
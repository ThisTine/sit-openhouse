'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// import Ict from '@/share/views/Ict';
import PageView from '@/share/views/PageView';
import Ict from 'public/images/ICT2022_3.jpg';
import OpenHouse from 'public/images/openHouse.jpg';
import Cs from 'public/images/cs.jpg';

const schedule = [
	{
		time: '10.00', title: 'OPEN HOUSE'
	},
	{
		time: '10.00', title: 'ICT CHALLENGE'
	},
	{
		time: '10.00', title: 'CS PROJECT D-DAY EXHIBITION', phone: 'D-DAY'
	}
];

const slider = [
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: OpenHouse,
		subtitle: "งานเปิดบ้านคณะเทคโนโลยีสารสนเทศ ครั้งแรกในรอบ 5 ปีกับงานเปิดบ้านเพื่อน้อง ๆ  มัธยมปลายที่สนใจในคณะเทคโนโลยีสารสนเทศ และสาขาทั้งหมดภายในคณะมาทำความรู้จักกันได้ผ่าน เวิร์คช็อปสุดพิเศษจากรุ่นพี่ SIT, ช่วงการบรรยายสุดพิเศษจากวิทยากรรับเชิญ, บูทประจำสาขา และกิจกรรมอื่นๆอีกมากมาย",
		title: "OPEN HOUSE@SIT",
		location: "ชั้น 1 และ 10 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		showButton: true
	},
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: Ict,
		subtitle: "ลับสมองประลองปัญญา กับการแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ICT Challenge 2023 เวทีสำหรับน้อง ๆ ระดับมัธยมปลายที่มีความสนใจทางด้านคอมพิวเตอร์และต้องการทดสอบความสามารถตนเองที่จะมาไขปัญหาทางด้านไอที พร้อมชิงรางวัลทุนการศึกษากว่า 10,000 บาท",
		title: "ICT CHALLENGE 2023",
		location: "Auditorium ชั้น 3 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		showButton: true
	},
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: Cs,
		subtitle: "นิทรรศการจัดแสดงผลงานของนักศึกษาชั้นปีที่ 4 หลักสูตรวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ) คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี รวบรวมผลงานหลากหลายประเภทกว่า 16 ชิ้น จากความต้องการในกระดาษสู่ผลงานที่ใช้งานได้จริง ",
		title: "CS PROJECT D-DAY EXHIBITION 2023",
		location: "ชั้น 3 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		ShadowRoot: false
	}
];


export default function App() {
	return (
		<Swiper className="mySwiper" modules={[Pagination]} pagination={true}>
			<SwiperSlide>
				<div className='h-screen w-full bg-[#34312F]'>
					<div className='flex h-full flex-col justify-center md:pl-20 md:pt-24 lg:pl-20'>
						<div className='flex flex-col gap-2 max-md:hidden'>
							<div className='text-white max-xl:text-4xl md:text-5xl xl:text-6xl'>กลับมาอีกครั้ง กับ 3 อีเว้นท์แห่งปี</div>
							<div className='text-white max-xl:text-4xl md:text-5xl xl:text-6xl'>จากคณะเทคโนโลยีสารสนเทศ</div>
							<div className='text-white max-xl:text-4xl md:text-5xl xl:text-6xl'>ที่ทุกคนรอคอย</div>
							<div className='mt-20 gap-32 text-6xl text-[#3399CC]'>
								{
									schedule.map((item, index) => {
										return (
											<div className='mb-16 flex gap-20' key={index}>
												<div className='md:text-5xl xl:text-6xl'>{item.time}</div>
												<div className='md:w-3/5 md:text-5xl xl:w-2/5 xl:text-6xl'>{item.title}</div>
											</div>
										);
									}
									)
								}
							</div>
						</div>
						<div className='md:hidden'>
							<div className='p-5 text-2xl font-bold text-white'>
								กลับมาอีกครั้ง กับ 3 อีเว้นท์แห่งปีจากคณะเทคโนโลยีสารสนเทศที่ทุกคนรอคอย
							</div>
							{
								schedule.map((item, index) => {
									return (
										<div className='flex pb-2 pl-5 text-[#3399CC]' key={index}>
											<div className='text-3xl font-bold'>{index == schedule.length - 1? item.phone: item.title}</div>
										</div>
									);
								}
								)
							}
						</div>
					</div>
				</div>
			</SwiperSlide>
			{
				slider.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<PageView 
							  details={slide.details}
							  imageUrl={slide.imageUrl}
							  location={slide.location}
							  showButton={slide.showButton}
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
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
import ImageUrl from 'public/images/ICT2022_3.jpg';


export default function App() {
	return (
		<Swiper className="mySwiper" modules={[Pagination]} pagination={true}>
			<SwiperSlide>
				<PageView 
				  details="รายละเอียดเพิ่มเติม..."
				  imageUrl={ImageUrl}
				  subtitle="ลับสมองประลองปัญญา กับการแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ICT Challenge 2023 เวทีสำหรับน้อง ๆ ระดับมัธยมปลายที่มีความสนใจทางด้านคอมพิวเตอร์และต้องการทดสอบความสามารถตนเองที่จะมาไขปัญหาทางด้านไอที พร้อมชิงรางวัลทุนการศึกษากว่า 10,000 บาท"
				  title="ICT CHALLENGE 2023"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<PageView 
				  details="รายละเอียดเพิ่มเติม..."
				  imageUrl={ImageUrl}
				  subtitle="ลับสมองประลองปัญญา กับการแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ICT Challenge 2023 เวทีสำหรับน้อง ๆ ระดับมัธยมปลายที่มีความสนใจทางด้านคอมพิวเตอร์และต้องการทดสอบความสามารถตนเองที่จะมาไขปัญหาทางด้านไอที พร้อมชิงรางวัลทุนการศึกษากว่า 10,000 บาท"
				  title="ICT CHALLENGE 2023"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<div className="h-screen w-full bg-gray-400" />
			</SwiperSlide>
		</Swiper>
	);
}

'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
	return (
		<Swiper className="mySwiper" modules={[Pagination]} pagination={true}>
			<SwiperSlide>
				<div className="h-screen w-full bg-gray-800" />
			</SwiperSlide>
			<SwiperSlide>
				<div className="h-screen w-full bg-gray-600" />
			</SwiperSlide>
			<SwiperSlide>
				<div className="h-screen w-full bg-gray-400" />
			</SwiperSlide>
		</Swiper>
	);
}

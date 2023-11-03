'use client';
import React, { useState } from 'react';
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

const slider = [
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: OpenHouse,
		subtitle: "งานเปิดบ้านคณะเทคโนโลยีสารสนเทศ ครั้งแรกในรอบ 5 ปีกับงานเปิดบ้านเพื่อน้อง ๆ  มัธยมปลายที่สนใจในคณะเทคโนโลยีสารสนเทศ และสาขาทั้งหมดภายในคณะมาทำความรู้จักกันได้ผ่าน เวิร์คช็อปสุดพิเศษจากรุ่นพี่ SIT, ช่วงการบรรยายสุดพิเศษจากวิทยากรรับเชิญ, บูทประจำสาขา และกิจกรรมอื่นๆอีกมากมาย",
		title: "OPEN HOUSE@SIT",
		location: "ชั้น 1 และ 10 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		showButton: true,
		//write a jsx element here
		moreDetails: () => {
			return (
				<div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem saepe deserunt labore! Reprehenderit quasi quo, quae modi corporis voluptates ad ut, nemo quaerat facilis ullam sunt quidem? Vero quibusdam et, velit recusandae quas quisquam cumque aperiam modi vel exercitationem veritatis nesciunt nam incidunt officia! Repellendus facilis voluptatem laudantium, blanditiis, nam voluptatum ex quo quos vel ipsa aspernatur qui aperiam reprehenderit in alias voluptate obcaecati culpa! Ab vitae saepe facere dignissimos voluptates, blanditiis alias omnis commodi. Commodi consectetur labore et numquam dolor porro totam ipsa fugiat natus? Dolor quibusdam magni, provident perferendis vero, dolores minus voluptates eum ad corrupti cupiditate.</p>
				</div>
			);
		}
	},
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: Ict,
		subtitle: "ลับสมองประลองปัญญา กับการแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ICT Challenge 2023 เวทีสำหรับน้อง ๆ ระดับมัธยมปลายที่มีความสนใจทางด้านคอมพิวเตอร์และต้องการทดสอบความสามารถตนเองที่จะมาไขปัญหาทางด้านไอที พร้อมชิงรางวัลทุนการศึกษากว่า 10,000 บาท",
		title: "ICT CHALLENGE 2023",
		location: "Auditorium ชั้น 3 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		showButton: true,
		showLicense: true,
		moreDetails: () => {
			return (
				<div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In facilis nemo excepturi autem voluptate culpa natus provident optio. Accusamus animi quam doloremque fuga cumque alias. Aperiam obcaecati odit illum, quod vitae praesentium doloribus impedit repellat eos asperiores veniam necessitatibus fuga molestiae temporibus nisi quas debitis eaque aut? Vero qui officia earum totam beatae fuga enim quasi fugiat ullam nam sit ea delectus animi doloribus quia cupiditate debitis, sint atque minima error? Ea similique ipsam inventore laborum iusto aliquam dolorem, pariatur quam omnis id culpa quos iure sequi consectetur consequatur atque distinctio dolores laudantium neque voluptas repudiandae quibusdam minus nobis aspernatur!</p>
				</div>
			);
		}
	},
	{
		details: "รายละเอียดเพิ่มเติม...",
		imageUrl: Cs,
		subtitle: "นิทรรศการจัดแสดงผลงานของนักศึกษาชั้นปีที่ 4 หลักสูตรวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ) คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี รวบรวมผลงานหลากหลายประเภทกว่า 16 ชิ้น จากความต้องการในกระดาษสู่ผลงานที่ใช้งานได้จริง ",
		title: "CS PROJECT D-DAY EXHIBITION 2023",
		location: "ชั้น 3 อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)",
		ShadowRoot: false,
		moreDetails: () => {
			return (
				<div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorum dignissimos aspernatur nulla dicta accusamus saepe. Corporis ducimus repellat tempore. Mollitia, neque laboriosam dolores aut repellat suscipit ipsum quidem asperiores ipsam accusantium? Quas, ratione libero. Ducimus molestias ipsam repellendus, tempora, fugit qui facilis corporis illo consectetur, iste eligendi? Aspernatur debitis voluptas, itaque iusto facere ratione distinctio, obcaecati exercitationem ipsa eligendi harum asperiores, omnis nisi? Libero, eligendi incidunt inventore unde commodi sequi. Quas nostrum fugiat suscipit distinctio id ullam excepturi sit delectus aliquid at provident odio alias voluptatum pariatur officiis nihil, laborum quae recusandae nam veritatis! Adipisci corrupti repellat aut eum!</p>
				</div>
			);
		}
	}
];

export default function App() {

	const [swiper, setSwiper] = useState<any>();

	const slideTo = (index: number) => {
		if (swiper) {
			swiper.slideTo(index);
		}
	};

	const handleClick = (page: number) => {
		slideTo(page);
	};

	return (
		<Swiper modules={[Pagination]} onSwiper={setSwiper} pagination={{
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
							  details={slide.details}
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
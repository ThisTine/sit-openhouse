import React from "react";
import Image from "next/image";
import CsDDay from 'public/images/cs_dday.png';

const Cs_Dday = () => {
	return (
		<div className="grid gap-8">
			<h1 className="pb-5 text-4xl font-bold">CS PROJECT D-DAY EXHIBITION 2023 </h1>
			<p>CS Project D-Day Exhibition 2023 งานแสดงผลงานด้านเทคโนโลยีและวิทยาการคอมพิวเตอร์ ของ นศ.ชั้นปีที่ 4 หลักสูตรวิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ) โดยจัดแสดงผลงานทั้งหมด 16 กลุ่ม </p>
			<p>เพื่อส่งเสริมให้นักศึกษานำเสนอและสาธิตผลงานที่สะท้อนให้เห็นถึงความเชี่ยวชาญและความเป็นมืออาชีพ แสดงให้เห็นถึงเป้าหมาย ขอบเขตและกระบวนการของผลงานที่ชัดเจนและมีคุณค่า</p>
			<p>ขอเชิญน้อง ๆ เยี่ยมชมผลงานพร้อมทดลองใช้งานระบบจากพี่ ๆ comsci inter ณ ลานแสดงนิทรรศการ อาคารการเรียนรู้พหุวิทยาการ (LX) ชั้น 3 วันจันทร์ที่ 27 พฤศจิกายน 2566 ตั้งแต่เวลา 08.30 – 16.30 น.</p>
			<Image alt="cs d-day" src={CsDDay} />
		</div>
	);
};

export default Cs_Dday;
import React from "react";
import ImageUrl from "public/images/ICT2022_3.jpg";
import Image from "next/image";
import Filter from "public/images/bitmap.png";
import Button from "../components/Button";

const Ict = () => {
	return (
		<div>
			<div className="h-screen w-full" style={{ zIndex:-1, position:"fixed" }}>
				<Image 
					alt="bg"
					layout="fill" 
					objectFit="cover"
					src={ImageUrl}
				 />
			</div>
			<div style={{ zIndex:1 }}>
				<Image 
					alt="filter"
					layout="fill"
					objectFit="cover"
					src={Filter}
				/>
			</div>
			<div className="grid h-screen w-full grid-cols-2 items-center" style={{ zIndex: 10,position:"relative" }}>
				<div className="p-10 text-white" style={{ paddingLeft:200 }} >
					<h1 className="font-bold" style={{ fontSize:45,paddingBottom:5 }} >ICT CHALLENGE 2023</h1>
					<p className="text-2xl" style={{ paddingBottom:5 }} >ลับสมองประลองปัญญา กับการแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ICT Challenge 2023 เวทีสำหรับน้อง ๆ ระดับมัธยมปลายที่มีความสนใจทางด้านคอมพิวเตอร์และต้องการทดสอบความสามารถตนเองที่จะมาไขปัญหาทางด้านไอที พร้อมชิงรางวัลทุนการศึกษากว่า 10,000 บาท
					</p>
					<p style={{ marginBottom:80 }} >รายละเอียดเพิ่มเติม...</p>
					<Button onClick={() => {}}>
						สมัครเลย!
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Ict;
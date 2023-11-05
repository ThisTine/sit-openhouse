import React from "react";
import Link from "next/link";
import Image from "next/image";
import Download from "@/share/icon/Download.png";


const Ict_Challenge = () => {
	return (
		<div className="grid gap-8">
			<h1 className="pb-5 text-4xl font-bold">ICT CHALLENGE 2023</h1>
			<p>จุดประกาย ท้าทายความสามารถค้นหาความเป็นไอทีในตัวคุณ รวมทีม 3 คน สมัครเข้าร่วมแข่งกัน ICT Challenge 2023 ชิงทุนการศึกษากว่า 10,000 บาท และรับเกียรติบัตรการเข้าร่วมแข่งขัน </p>
			<p>คัดเลือกทีมที่จะมีสิทธิ์เข้าแข่งขันรอบคัดเลือกเพียง 60 ทีมเท่านั้น และคัดเลือกให้เหลือ 10 ทีมในรอบชิงชนะเลิศ</p>
			<div>
				<p>โดยมีกลุ่มความรู้ที่ใช้ในการแข่งขัน 5 กลุ่มดังนี้</p>
				<ol className="list-inside list-decimal">
					<li>กลุ่มความรู้ทั่วไป</li>
					<li>กลุ่มเทคโนโลยีเครือข่าย และระบบปฏิบัติการ</li>
					<li>กลุ่มการเขียนโปรแกรม และอัลกอรึทึม</li>
					<li>กลุ่ม Hardware/Infrastructure/Cloud Computing</li>
					<li>กลุ่ม Smart System</li>
				</ol>
			</div>
			<p className="font-bold">สมัครได้ตั้งแต่วันนี้ - 16 พฤศจิกายน 2566</p>
			<div>
				<p>อ่านรายละเอียดเพิ่มเติมได้ที่  https://kmutt.me/ictchallenge2023</p>
				<p>สอบถามรายละเอียดได้ที่  02-470-9832</p>
				<ul>
					<li>Line@: @SIT.KMUTT</li>
					<li>FB: SIT.Family</li>
					<li>E-mail: info@sit.kmutt.ac.th</li>
				</ul>
			</div>
			<div>
				<Link className="flex items-center gap-2 underline max-md:place-self-center lg:text-base" href="https://kmutt.me/ictchallenge2023" target="blank"><Image alt="download icon" src={Download} /> <p>download ใบขออนุญาตโรงเรียนและกฎกติกาการแข่งขัน</p></Link>
			</div>
		</div>
	);
};

export default Ict_Challenge;

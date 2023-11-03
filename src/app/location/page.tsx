import assetsImg from 'src/app/location/assest/image21.png';
import Image from 'next/image';
import Imgassets from './assest/image21.png';
import Card from './component/card';
import Way from './component/way';
import  Accordion  from './component/Accordion';
import React from 'react';


const items = [
	{ title: 'Accordion 1', content: 'Content for Accordion 1' },
	{ title: 'Accordion 2', content: 'Content for Accordion 2' },
	{ title: 'Accordion 3', content: 'Content for Accordion 3' }
];
const locationPage = () => {
	return (
		<div>
			{/* screen 1 */}
			<div className='h-screen w-screen  bg-[url("/background.png")] bg-cover bg-fixed '>
				<div className='h-screen  w-screen bg-gradient-to-b from-black/70 to-gray-600/50' >

					<div className='flex flex-col items-center justify-center p-8 md:p-10 lg:p-12' >
						<h1 className='p-10 text-3xl text-primary md:text-4xl lg:text-6xl'>ข้อมูลเพิ่มเติม</h1>
						
					</div>
					<div className='flex flex-col'>
						<Card/>
					
					</div>
		

				</div>
				
			</div>

			{/* screen 2 */}
			<div className='h-screen w-screen  bg-transparent bg-[url("/background.png")] bg-cover bg-fixed '>
				<div className='h-screen  w-screen bg-gradient-to-b from-gray-600/50 to-gray-600/50' >

					<div className='flex h-screen flex-col items-center justify-center'>
						<Way/>
					</div>
	

				</div>
			
			</div>

			{/* screen 3 */}
			<div className='h-screen w-screen bg-[url("/Group_88.png")] bg-cover bg-fixed'>
				<div className='h-screen w-screen bg-gradient-to-b from-gray-600/70 to-gray-600/50 pb-10'>
					<div className="flex h-screen flex-col items-center justify-center">
						<h1 className='p-5 text-3xl text-primary md:text-4xl lg:text-6xl'>คำถามที่พบบ่อย</h1>
						<div className="mb-4 text-start max-xl:w-3/4 xl:w-3/4">
							<Accordion content="การแข่ง ICT Challenge 2023 ต้องลงทะเบียนเข้าร่วมเป็นทีม ส่วนกิจกรรม SIT Openhouse 2023 เป็นกิจกรรมเปิดที่ไม่ต้องลงทะเบียน ยกเว้น ต้องการเข้าร่วมเวิร์คช็อป และงาน CS D-Day Project 2023 สามารถลงทะเบียนเข้าร่วมได้หน้างาน" title="ต้องลงทะเบียนเข้าร่วมงานไหม ?" />
							<Accordion content="ได้แน่นอน! กิจกรรมในโอเพ่นเฮ้าส์น้อง ๆ ทุกคนสามารถเข้าร่วมได้โดยไม่ต้องลงทะเบียน ยกเว้นต้องการเข้าร่วมเวิร์คช็อป จะต้องมีการสำรองที่นั่ง หากสนใจเข้าร่วมเวิร์คช็อปสามารถดูข้อมูลเพิ่มเติมและสมัครเข้าร่วมตามเวิร์คช็อปที่สนใจได้เลย ! " title="หากลงทะเบียนแข่งขัน ICT Challenge สามารถเข้าร่วมกิจกรรม SIT Openhouse 2023 ได้หรือไม่?" />
							<Accordion content="ได้ น้อง ๆ สามารถเข้าร่วมเวิร์คช็อปของทุกสาขาได้ตามที่ต้องการเลยค่ะ ! " title="สามารถเข้าร่วมมากกว่า 1 Workshop ในงาน SIT Open House ได้หรือไม่ ?" />
							<Accordion content="ทั้งสามกิจกรรมไม่มีค่าใช้จ่ายในการเข้าร่วม" title="มีค่าใช้จ่ายไหม ?" />
							<Accordion content="สำหรับการแต่งกาย ขึ้นอยู่กับระเบียบข้อบังคับของกิจกรรมนั้น ๆ สามารถอ่านรายละเอียดเพิ่มเติมได้ตามกิจกรรมที่สนใจ" title="ต้องแต่งกายอย่างไร" />
						</div>
						
					</div>
				</div>
			</div>

		</div>

	);
};

export default locationPage;	
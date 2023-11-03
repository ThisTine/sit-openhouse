import Image, { StaticImageData } from "next/image";
import Filter from "public/images/bitmap.png";
import Filter2 from "public/images/phone.png";
import imageUrl from "public/images/HomePage.png";
import Ripper from "public/images/riperPaper.png";
import RipperPhone from "public/images/riperPhone.png";
import Location from "@/share/icon/Location.svg";

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

export function HomeView() {
	return (
		<div className='h-screen w-full bg-[#34312F]'>
			<div className="fixed z-0 h-screen w-full">
				<div className="relative z-10 bg-black" />
				<Image alt="bg" layout="fill" objectFit="cover" src={imageUrl} />
			</div>
			<div className="z-10">
				<Image alt="filter" className="max-md:hidden" layout="fill" objectFit="cover" src={Filter} />
				<Image alt="filter" className="md:hidden" layout="fill" objectFit="cover" src={Filter2} />
			</div>
			<div className="z-20">
				<Image alt="filter" className="max-md:hidden" layout="fill" objectFit="cover" src={Ripper} />
				<Image alt="filter" className="mr-10 mt-0 md:hidden" layout="fill" objectFit="cover" src={RipperPhone} />
			</div>
			<div className='relative z-40 flex h-full flex-col justify-center md:pl-16 md:pt-24 lg:pl-12 xl:ml-24'>
				<div className='flex flex-col gap-2 max-md:hidden'>
					<div className='font-bold text-white max-xl:text-4xl md:text-4xl xl:text-6xl'>กลับมาอีกครั้ง กับ 3 อีเว้นท์แห่งปี</div>
					<div className='font-bold text-white max-xl:text-4xl md:text-3xl xl:text-5xl'>จากคณะเทคโนโลยีสารสนเทศที่ทุกคนรอคอย</div>
					<div className="lx:w-1/3 mt-7 flex gap-5 text-white md:w-2/3 lg:w-2/3">
						<Image alt="location" src={Location} />
						<p className="w-3/4 md:text-2xl lg:text-3xl xl:text-3xl">อาคารการเรียนรู้พหุวิทยาการ (LX Buliding) <br /> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี </p>
					</div>
					<div className='mt-10 flex w-2/4 flex-col gap-10 text-[#3399CC] md:ml-8 md:text-4xl lg:ml-6 lg:text-4xl xl:text-6xl'>
						<div>
							SIT OPEN HOUSE 2023
							<p className="md:text-2xl xl:text-3xl">งานเปิดบ้านเทคโนโลยีสารสนเท​ศ</p>
						</div>
						<div>
							ICT CHALLENGE
							<p className="md:text-2xl xl:text-3xl">การแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์ ฯ</p>
						</div>
						<div>
							CS PROJECT D-DAY EXHIBITION 
							<p className="md:text-2xl xl:text-3xl">นิทรรศการแสดงผลงานนักศึกษา CS@SIT ชั้นปีที่ 4</p>
						</div>
					</div>
				</div>
				<div className='md:hidden'>
					<div className='mt-40 p-5 text-xl font-bold text-white'>
                    กลับมาอีกครั้ง กับ 3 อีเว้นท์แห่งปีจากคณะเทคโนโลยีสารสนเทศที่ทุกคนรอคอย
					</div>
					<div className="mb-5 ml-5 flex gap-5 text-white">
						<Image alt="location" src={Location} />
						<p className="max-lg:text-base lg:text-2xl">อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)<br />  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี </p>
					</div>
					<div className="flex flex-col gap-10 px-5 text-2xl text-[#3399CC]">
						<div>
							SIT OPEN HOUSE 2023
							<p className="text-xl">งานเปิดบ้านเทคโนโลยีสารสนเท​ศ</p>
						</div>
						<div>
							ICT CHALLENGE
							<p className="text-xl">การแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์ ฯ</p>
						</div>
						<div>
							CS PROJECT D-DAY EXHIBITION 
							<p className="text-xl">นิทรรศการแสดงผลงานนักศึกษา CS@SIT ชั้นปีที่ 4</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
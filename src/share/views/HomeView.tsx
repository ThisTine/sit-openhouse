import Image from "next/image";
import Filter from "public/images/bitmap.png";
import Filter2 from "public/images/phone.png";
import imageUrl from "public/images/HomePage.png";
import Ripper from "public/images/riperPaper.png";
import RipperPhone from "public/images/riperPhone.png";
import Location from "@/share/icon/Location.svg";

interface HomeViewProps {
	PageView: (page: number) => void;
}

export function HomeView({ PageView }: HomeViewProps) {
	const changePage = (page: any) => {
		PageView(page);
	};

	return (
		<div className="h-screen w-full bg-[#34312F]">
			<div className="fixed z-0 h-screen w-full">
				<div className="relative z-10 bg-black" />
				<Image alt="bg" layout="fill" objectFit="cover" src={imageUrl} />
			</div>
			<div className="z-10">
				<Image
					alt="filter"
					className="max-sm:hidden"
					layout="fill"
					objectFit="cover"
					src={Filter}
				/>
				<Image
					alt="filter"
					className="sm:hidden"
					layout="fill"
					objectFit="cover"
					src={Filter2}
				/>
			</div>
			<div className="z-20">
				<Image
					alt="filter"
					className="max-sm:hidden"
					layout="fill"
					objectFit="cover"
					src={Ripper}
				/>
				<Image
					alt="filter"
					className="mr-10 mt-0 sm:hidden"
					layout="fill"
					objectFit="cover"
					src={RipperPhone}
				/>
			</div>
			<div className="relative z-40 flex h-full flex-col justify-center sm:pl-12 sm:pt-24 lg:pl-12 xl:ml-24">
				<div className="flex flex-col gap-2 max-sm:hidden">
					<div className="font-bold text-white max-xl:text-4xl sm:text-4xl lg:text-4xl xl:text-5xl">
						กลับมาอีกครั้ง กับ 3 กิจกรรมแห่งปี
					</div>
					<div className="font-bold text-white max-xl:text-2xl md:text-2xl lg:text-2xl xl:text-4xl">
						จากคณะเทคโนโลยีสารสนเทศที่ทุกคนรอคอย
					</div>
					<div className="lx:w-1/3 mt-7 flex gap-5 text-white sm:w-2/3 md:mt-3 lg:w-3/4">
						<Image alt="location" src={Location} />
						<p className="sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
							อาคารการเรียนรู้พหุวิทยาการ (LX Buliding) <br />{" "}
							มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี{" "}
						</p>
					</div>
					<div className="mt-6 flex w-2/4 flex-col gap-10 text-[#3399CC] sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
						<div
							className="hover:cursor-pointer hover:text-sky-400"
							onClick={() => changePage(1)}
						>
							<p className="font-semibold">SIT OPEN HOUSE 2023</p>
							<p className="sm:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
								งานเปิดบ้านคณะเทคโนโลยีสารสนเท​ศ
							</p>
						</div>
						<div
							className="hover:cursor-pointer hover:text-sky-400"
							onClick={() => changePage(2)}
						>
							<p className="font-semibold">ICT CHALLENGE 2023</p>
							<p className="sm:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
								การแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์
							</p>
						</div>
						<div
							className="hover:cursor-pointer hover:text-sky-400"
							onClick={() => changePage(3)}
						>
							<p className="font-semibold">CS PROJECT D-DAY EXHIBITION 2023</p>
							<p className="sm:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
								นิทรรศการแสดงผลงานนักศึกษา CS@SIT ชั้นปีที่ 4
							</p>
						</div>
					</div>
					<div className="mt-7 w-fit text-white sm:text-4xl xl:text-4xl 2xl:text-5xl">
						<div className="text-center">
							<p className="pb-3 font-bold">27 November 2023</p>
							<p className="sm:text-3xl xl:text-3xl 2xl:text-4xl">27 พฤศจิกายน 2566</p>
						</div>
					</div>
				</div>
				<div className="sm:hidden">
					<div className="mt-40 p-5 text-xl font-bold text-white">
						กลับมาอีกครั้ง กับ 3
						EVENTS แห่งปีจากคณะเทคโนโลยีสารสนเทศที่ทุกคนรอคอย
					</div>
					<div className="mb-5 ml-5 flex gap-5 text-white">
						<Image alt="location" src={Location} />
						<p className="max-lg:text-base lg:text-2xl">
							อาคารการเรียนรู้พหุวิทยาการ (LX Buliding)
							<br /> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี{" "}
						</p>
					</div>
					<div className="flex flex-col gap-5 px-5 text-2xl text-[#3399CC]">
						<div className="hover:cursor-pointer" onClick={() => changePage(1)}>
							<p className="font-semibold">SIT OPEN HOUSE 2023</p>
							<p className="text-lg">งานเปิดบ้านคณะเทคโนโลยีสารสนเท​ศ</p>
						</div>
						<div className="hover:cursor-pointer" onClick={() => changePage(2)}>
							<p className="font-semibold">ICT CHALLENGE 2023</p>
							<p className="text-lg">การแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์</p>
						</div>
						<div className="hover:cursor-pointer" onClick={() => changePage(3)}>
							<p className="font-semibold">CS PROJECT D-DAY EXHIBITION 2023</p>
							<p className="text-lg">
								นิทรรศการแสดงผลงานนักศึกษา CS@SIT ชั้นปีที่ 4
							</p>
						</div>
					</div>
					<div className="flex justify-center px-5 text-xl text-white">
						<div className="text-center">
							<p className="font-bold">27 November 2023</p>
							<p className="text-lg">27 พฤศจิกายน 2566</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import Button from "../components/Button";
import Filter from "public/images/bitmap.png";
import Filter2 from "public/images/phone.png";
import Location from "@/share/icon/Location.svg";
import Download from "@/share/icon/Download.png";
import Back from "@/share/icon/Back.png";


interface PageProps {
    imageUrl: StaticImageData;
    title: string;
    subtitle: string;
    details: string;
	location?: string;
	showButton?: boolean;
	showLicense?: boolean;
}


const PageView = ({ imageUrl, title, subtitle, details, location, showButton, showLicense }: PageProps) => {

	const [slide, setSlide] = useState(false);

	const toggleSidebar = () => {
	  setSlide(!slide);
	};
  

	return (
		<div>
			<div className="fixed z-0 h-screen w-full">
				<Image alt="bg" layout="fill" objectFit="cover" src={imageUrl} />
			</div>
			<div className="z-10">
				<Image alt="filter" className="max-md:hidden" layout="fill" objectFit="cover" src={Filter} />
				<Image alt="filter" className="md:hidden" layout="fill" objectFit="cover" src={Filter2} />
			</div>
			<div className="relative z-20 grid h-screen w-full grid-cols-1 items-center max-lg:px-10 lg:grid-cols-2">
				<div className={`grid gap-4 text-white lg:pl-28 ${slide ? "hidden" : ""}`}>
					<h1 className="text-3xl font-bold">
						{title}
					</h1>
					{location ? <div className="flex items-center gap-2">
						<Image alt="location" src={Location} />
						<p className="font-semibold max-lg:text-base lg:text-xl">{location}</p>
					</div> : null}
					<p className="text-base lg:text-xl">
						{subtitle}
					</p>
					<p className="cursor-pointer pb-32 underline" onClick={toggleSidebar}>{details}</p>
					{showButton ? <Button onClick={() => {}}>สมัครเลย!</Button> : <h1 className="text-2xl font-bold max-md:text-center md:text-4xl md:font-medium">ลงทะเบียนเข้าชมหน้างาน</h1>}
					{showLicense ? <Link className="flex gap-2" href="/"><Image alt="download icon" src={Download} /> <div className="text-xs underline max-md:text-center md:text-base">download ใบขออนุญาตโรงเรียนและกฎกติกาการแข่งขัน</div></Link> : null}
				</div>
				<div className={`fixed left-5 top-5 ml-16 mt-16 flex place-items-center gap-2 ${slide ? "" : "hidden"}`}>
					<Image alt="back" className="h-[20px]" src={Back} />
					<h1 className="cursor-pointer text-2xl text-white" onClick={toggleSidebar}>Back</h1>
				</div>
			</div>
			<div
				className={`fixed right-0 top-0 z-40 h-full w-[75vw] bg-[#34312F] p-10 pl-20 text-white  duration-300 ease-in-out ${
					slide ? "translate-x-0 " : "translate-x-full"
				}`}
			>
				<h2 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h2>
			</div>
		</div>
	);
};

export default PageView;

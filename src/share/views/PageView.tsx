import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import Button from "../components/Button";
import Filter from "public/images/bitmap.png";
import Filter2 from "public/images/phone.png";
import Location from "@/share/icon/Location.svg";
import Download from "@/share/icon/Download.png";
import Back from "@/share/icon/Back.png";
// import Paper from "public/images/Paper.png";


interface PageProps {
	imageUrl: StaticImageData;
	title: string;
	subtitle: string;
	details: string;
	location?: string;
	showButton?: boolean;
	showLicense?: boolean;
	moreDetails: JSX.Element;
	buttonText?: string;
	href?: string;
}


const PageView = ({ imageUrl, title, subtitle, details, location, showButton, showLicense, moreDetails, buttonText, href }: PageProps) => {

	const [slide, setSlide] = useState(false);

	const toggleSidebar = () => {
		setSlide(!slide);
	};


	return (
		<div>
			<div className="fixed z-0 h-screen w-full">
				<Image alt="bg" className="h-full" layout="fill" objectFit="cover" src={imageUrl} />
			</div>
			<div className="z-10">
				<Image alt="filter" className="h-full max-md:hidden" layout="fill" objectFit="cover" src={Filter} />
				<Image alt="filter" className="h-full md:hidden" layout="fill" objectFit="cover" src={Filter2} />
			</div>
			<div className="relative z-20 grid h-screen w-full grid-cols-1 items-center max-lg:px-10 lg:grid-cols-2">
				<div className={`grid gap-4 text-white transition-opacity duration-500 lg:pl-28 ${slide ? "opacity-0" : "opacity-100"}`}>
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
					{showButton ? <Button disabled={buttonText ? true : false} href={href} onClick={() => { }}>{buttonText ? buttonText : "สมัครเลย!"}</Button> : <h1 className="text-2xl font-bold max-md:text-center md:text-4xl md:font-medium">ลงทะเบียนเข้าชมหน้างาน</h1>}
					{showLicense ? <Link className="flex items-center gap-2 underline max-md:place-self-center lg:text-base" href="https://kmutt.me/ictchallenge2023" target="blank"><Image alt="download icon" src={Download} /> <p>download ใบขออนุญาตโรงเรียนและกฎกติกาการแข่งขัน</p></Link> : null}
				</div>
				<div className={`fixed left-5 top-5 flex place-items-center gap-2 max-lg:ml-5 max-lg:mt-16 lg:ml-16 lg:mt-16 ${slide ? "" : "hidden"}`}>
					<Image alt="back" className="h-[20px]" src={Back} />
					<h1 className="cursor-pointer text-2xl text-white" onClick={toggleSidebar}>Back</h1>
				</div>
			</div>
			<div
				className={`fixed right-0 top-0 z-40 h-full bg-[#34312F] text-white duration-300 ease-in-out max-lg:w-full max-lg:rounded-t-2xl lg:w-[65vw] lg:rounded-l-2xl lg:p-10 lg:pl-20 ${slide ? "max-lg:inset-y-40 lg:translate-x-0" : "max-lg:inset-y-full lg:translate-x-full"
				}`}
			>
				<div className="w-full overflow-y-scroll pb-20 max-lg:h-[80%] max-lg:px-10 max-lg:pt-14 lg:h-full lg:pt-16">
					{moreDetails}
				</div>
			</div>
		</div>
	);
};

export default PageView;

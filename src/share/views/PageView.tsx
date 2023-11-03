import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import Filter from "public/images/bitmap.png";
import Filter2 from "public/images/phone.png";
import Location from "@/share/icon/Location.svg";


interface PageProps {
    imageUrl: StaticImageData;
    title: string;
    subtitle: string;
    details: string;
	location?: string;
	showButton?: boolean;
}

const PageView = ({ imageUrl, title, subtitle, details, location, showButton }: PageProps) => {
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
				<div className="grid gap-4 text-white lg:pl-28">
					<h1 className="text-3xl font-bold">
						{title}
					</h1>
					{location ? <div className="flex items-center gap-2">
						<Image alt="location" src={Location} />
						<p className="text-xl font-semibold">{location}</p>
					</div> : null}
					<p className="text-xl">
						{subtitle}
					</p>
					<p className="pb-32 underline">{details}</p>
					{showButton ? <Button onClick={() => {}}>สมัครเลย!</Button> : <h1 className="text-2xl font-bold max-md:text-center md:text-4xl md:font-medium">ลงทะเบียนเข้าชมหน้างาน</h1>}
				</div>
			</div>
		</div>
	);
};

export default PageView;

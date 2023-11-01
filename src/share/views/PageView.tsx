import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import Filter from "public/images/bitmap.png";
import Filter2 from "public/images/phone.png";


interface PageProps {
    imageUrl: StaticImageData;
    title: string;
    subtitle: string;
    details: string;
}

const PageView = ({ imageUrl, title, subtitle, details }: PageProps) => {
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
				<div className="grid gap-4 text-white lg:pl-32">
					<h1 className="text-3xl font-bold">
						{title}
					</h1>
					<p className="text-xl">
						{subtitle}
					</p>
					<p className="pb-32 underline">{details}</p>
					<Button onClick={() => {}}>สมัครเลย!</Button>
				</div>
			</div>
		</div>
	);
};

export default PageView;

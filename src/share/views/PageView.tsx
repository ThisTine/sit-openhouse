import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../components/Button";
import Filter from "public/images/bitmap.png";


interface PageProps {
    imageUrl: StaticImageData;
    title: string;
    subtitle: string;
    details: string;
}

const PageView = ({ imageUrl, title, subtitle, details }: PageProps) => {
	return (
		<div>
			<div className="h-screen w-full" style={{ zIndex: -1, position: "fixed" }}>
				<Image alt="bg" layout="fill" objectFit="cover" src={imageUrl} />
			</div>
			<div style={{ zIndex: 1 }}>
				<Image alt="filter" layout="fill" objectFit="cover" src={Filter} />
			</div>
			<div className="grid h-screen w-full grid-cols-2 items-center" style={{ zIndex: 10, position: "relative" }}>
				<div className="p-10 text-white" style={{ paddingLeft: 200 }}>
					<h1 className="font-bold" style={{ fontSize: 45, paddingBottom: 5 }}>
						{title}
					</h1>
					<p className="text-2xl" style={{ paddingBottom: 5 }}>
						{subtitle}
					</p>
					<p style={{ marginBottom: 80 }}>{details}</p>
					<Button onClick={() => {}}>สมัครเลย!</Button>
				</div>
			</div>
		</div>
	);
};

export default PageView;

import React, { FC } from "react";
import { th, en } from "../text";
import BackgroundImage from "../img/MobileBackground.png";
import Image from "next/image";
import MobileColumn from "./MobileColumn";

const RenderMobile: FC<{
	lang: string;
	filter: number;
	handleFilterSelect: (filter: number) => void;
}> = ({ lang, filter, handleFilterSelect }) => {
	// screen div
	return (
		<div className="h-screen w-screen bg-[#34312F] px-4 pt-20">
			<div>
				<Image
					alt="background"
					className="absolute bottom-0 w-screen"
					src={BackgroundImage}
				/>
			</div>
			{/* Header */}
			<div className="relative flex items-center justify-center">
				<h3 className="pt-10 text-2xl font-bold text-[#3399cc]">
					{lang === "th" ? th.agenda : en.agenda}
				</h3>
			</div>
			{/* Selector */}
			<div className="flex max-h-[100px] min-h-[40px] flex-row items-center justify-around px-3">
				<div
					className={
						"flex flex-col h-fit py-1 items-center justify-center rounded px-2 text-white " +
						(filter === 0 ? "bg-[#F03D3E]" : "") +
						" cursor-pointer"
					}
					onClick={() => handleFilterSelect(0)}>
					<h4
						className={
							filter === 0 ? "text-sm font-bold" : "text-xs"
						}>
						OPEN HOUSE
					</h4>
				</div>
				<div
					className={
						"flex flex-col h-fit py-1 items-center justify-center rounded px-2 text-white " +
						(filter === 1 ? "bg-[#F03D3E]" : "") +
						" cursor-pointer"
					}
					onClick={() => handleFilterSelect(1)}>
					<h4
						className={
							filter === 1 ? "text-sm font-bold" : "text-xs"
						}>
						ICT CHALLENGE
					</h4>
				</div>
				<div
					className={
						"flex flex-col h-fit py-1 items-center justify-center rounded px-2 text-white " +
						(filter === 2 ? "bg-[#F03D3E]" : "") +
						" cursor-pointer"
					}
					onClick={() => handleFilterSelect(2)}>
					<h4
						className={
							filter === 2 ? "text-sm font-bold" : "text-xs"
						}>
						CS D-DAY
					</h4>
				</div>
			</div>
			{/* Date */}
			<div className="flex items-start justify-start pt-4">
				<h1 className="text-xl text-white">
					{lang === "th"
						? "วันที่ 27 พฤศจิกายน 2566"
						: "27 November 2023"}
				</h1>
			</div>
			{/* Line */}
			<div className="border-[1px] border-[#8D8D8D]" />
			<MobileColumn {...{ lang, filter }} />
		</div>
	);
};
export default RenderMobile;

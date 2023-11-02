import { FC } from "react";
import { th, en } from "../text";
import TimeTable from "./TimeTable";

const RenderDesktop: FC<{
	lang: string;
	filter: number;
	handleFilterSelect: (filter: number) => void;
}> = ({ lang, filter, handleFilterSelect }) => {
	return (
		//Screen div
		<div className="w-screen bg-[#34312F] pt-10">
			{/* AgendaText */}
			<div className="flex items-center justify-center p-5 pt-10">
				<h1 className="text-5xl font-bold text-[#3399CC]">
					{lang === "th" ? th.agenda : en.agenda}
				</h1>
			</div>
			{/* Selector */}
			<div className="flex flex-row justify-center space-x-4">
				<div
					className={
						"rounded p-1 pl-2 pr-2 text-white " +
						(filter === 0 ? "bg-[#F03D3E]" : "") +
						" cursor-pointer"
					}
					onClick={() => handleFilterSelect(0)}>
					{lang === "th" ? th.all : en.all}
				</div>
				<div
					className={
						"rounded p-1 pl-2 pr-2 text-white " +
						(filter === 1 ? "bg-[#F03D3E]" : "") +
						" cursor-pointer"
					}
					onClick={() => handleFilterSelect(1)}>
					Open House
				</div>
				<div
					className={
						"rounded p-1 pl-2 pr-2 text-white " +
						(filter === 2 ? "bg-[#F03D3E]" : "") +
						" cursor-pointer"
					}
					onClick={() => handleFilterSelect(2)}>
					ICT Challenge
				</div>
				<div
					className={
						"rounded p-1 pl-2 pr-2 text-white " +
						(filter === 3 ? "bg-[#F03D3E]" : "") +
						" cursor-pointer"
					}
					onClick={() => handleFilterSelect(3)}>
					CS D-Day
				</div>
			</div>
			{/* Date */}
			<div className="flex pt-10">
				<div className="w-1/12" />
				<h1 className="text-2xl text-white">
					{lang === 'th' ? "วันที่ 27 พฤศจิกายน 2566": "27 November 2023"}
				</h1></div>
			{/* Agenda */}
			<div className="flex items-start justify-start pt-10">
				<TimeTable {...{ lang, filter }} />
			</div>
		</div>
	);
};

export default RenderDesktop;

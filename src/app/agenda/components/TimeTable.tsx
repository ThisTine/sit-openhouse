import { FC } from "react";
import { th, en } from "../text";
import AllTable from "./AllTable";

const TimeTable: FC<{
	lang: string;
	filter: number;
	handleFilterSelect: (filter: number) => void;
}> = ({ lang, filter, handleFilterSelect }) => {
	return (
		//Main div
		<div className="mb-20 flex w-screen flex-col items-center justify-center">
			{/* Top component */}
			<div className="flex w-11/12 justify-center space-x-2 text-white">
				{/* Time and Category header */}
				<div className="flex h-1/2 w-1/12 flex-col items-end justify-center">
					<h4>{lang === "th" ? th.place : en.place}</h4>
					<h4 className="pr-6">
						{lang === "th" ? th.time : en.time}
					</h4>
				</div>
				{/* Category */}
				<div
					className={
						"flex w-1/3 min-w-[100px] max-w-[250px] flex-col items-center justify-center rounded cursor-pointer " +
						(filter === 0 || filter === 3
							? "bg-[#3399CC]"
							: "bg-[#495057]")
					}
					onClick={() => handleFilterSelect(3)}>
					<h3 className="font-bold">CS Project D-Day</h3>
					<h4>{lang === "th" ? th.ddayLocation : en.ddayLocation}</h4>
				</div>
				<div
					className={
						"flex w-1/3 min-w-[100px] max-w-[250px] flex-col items-center justify-center rounded cursor-pointer " +
						(filter === 0 || filter === 2
							? "bg-[#3399CC]"
							: "bg-[#495057]")
					}
					onClick={() => handleFilterSelect(2)}>
					<h3 className="font-bold">ICT Challenge</h3>
					<h4>{th.ictLocation}</h4>
				</div>
				<div
					className={
						"flex w-1/3 min-w-[100px] max-w-[250px] flex-col items-center justify-center rounded cursor-pointer " +
						(filter === 0 || filter === 1
							? "bg-[#3399CC]"
							: "bg-[#495057]")
					}
					onClick={() => handleFilterSelect(1)}>
					<h3 className="font-bold">Open House 2023 (Stage)</h3>
					<h4>{th.openhouseStageLocation}</h4>
				</div>
				<div
					className={
						"flex w-1/3 min-w-[100px] max-w-[250px] flex-col items-center justify-center rounded cursor-pointer " +
						(filter === 0 || filter === 1
							? "bg-[#3399CC]"
							: "bg-[#495057]")
					}
					onClick={() => handleFilterSelect(1)}>
					<h3 className="font-bold">Open House 2023 (Workshop)</h3>
					<h4>{th.openhouseWorkshopLocation}</h4>
				</div>
			</div>
			{/* Agenda */}
			<div className="flex w-11/12 justify-center space-x-2 pt-3 text-white">
				{/* Time */}
				<div className="flex w-1/12 flex-col items-end justify-center sm:space-y-[124px] md:space-y-[124px]">
					<h4>08:00</h4>
					<h4>09:00</h4>
					<h4>10:00</h4>
					<h4>11:00</h4>
					<h4>12:00</h4>
					<h4>13:00</h4>
					<h4>14:00</h4>
					<h4>15:00</h4>
					<h4>16:00</h4>
					<h4>17:00</h4>
				</div>
				<AllTable filter={filter} lang={lang} />
			</div>
		</div>
	);
};

export default TimeTable;

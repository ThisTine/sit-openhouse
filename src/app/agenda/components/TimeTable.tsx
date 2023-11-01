import { th, en } from "../text";
import AllTable from "./AllTable";

const TimeTable = (lang: string, filter: number) => {
	return (
		//Main div
		<div className="flex w-screen flex-col items-center justify-center">
			{/* Top component */}
			<div className="flex w-11/12 justify-center space-x-2 text-white">
				{/* Time and Category header */}
				<div className="flex h-1/2 w-1/6 flex-col items-end justify-center">
					<h4>{lang === "th" ? th.place : en.place}</h4>
					<h4 className="pr-6">
						{lang === "th" ? th.time : en.time}
					</h4>
				</div>
				{/* Category */}
				<div className="flex w-1/3 flex-col items-center justify-center rounded bg-[#3399CC]">
					<h3>CS Project D-Day</h3>
					<h4>{lang === "th" ? th.ddayLocation : en.ddayLocation}</h4>
				</div>
				<div className="flex w-1/3 flex-col items-center justify-center rounded bg-[#3399CC]">
					<h3>ICT Challenge</h3>
				</div>
				<div className="flex w-1/3 flex-col items-center justify-center rounded bg-[#3399CC]">
					<h3>Open House 2023 (Stage)</h3>
					<h4>
						{lang === "th"
							? th.openhouseLocation
							: en.openhouseLocation}
					</h4>
				</div>
				<div className="flex w-1/3 flex-col items-center justify-center rounded bg-[#3399CC]">
					<h3>Open House 2023 (Workshop)</h3>
				</div>
			</div>
			{/* Agenda */}
			<div className="flex w-11/12 justify-center space-x-2 text-white">
				{/* Time */}
				<div className="flex w-1/6 flex-col items-end justify-center sm:space-y-[50px] md:space-y-[50px]">
					<h4>08:00</h4>
					<h4>--------</h4>
					<h4>09:00</h4>
					<h4>--------</h4>
					<h4>10:00</h4>
					<h4>--------</h4>
					<h4>11:00</h4>
					<h4>--------</h4>
					<h4>12:00</h4>
					<h4>--------</h4>
					<h4>13:00</h4>
					<h4>--------</h4>
					<h4>14:00</h4>
					<h4>--------</h4>
					<h4>15:00</h4>
					<h4>--------</h4>
					<h4>16:00</h4>
					<h4>--------</h4>
					<h4>17:00</h4>
				</div>
				{filter == 0 ? AllTable(lang) : null}
                
			</div>
		</div>
	);
};

export default TimeTable;

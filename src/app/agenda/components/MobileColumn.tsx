import { FC } from "react";
import DdayMobile from "../data/DdayMobile";
import ICTMobile from "../data/ICTMobile";
import OpenHouseMobile from "../data/OpenHouseMobile";

const MobileColumn: FC<{
	lang: string;
	filter: number;
}> = ({ lang, filter }) => {
	const data =
		filter === 1 ? ICTMobile : filter === 2 ? DdayMobile : OpenHouseMobile;
	return data.map((data, index: number) => {
		const startHour =
			Math.floor(data.start / 100) < 10
				? "0" + Math.floor(data.start / 100)
				: Math.floor(data.start / 100);
		const startMinute = data.start % 100 === 0 ? "00" : data.start % 100;
		const endHour =
			Math.floor(data.end / 100) < 10
				? "0" + Math.floor(data.end / 100)
				: Math.floor(data.end / 100);
		const endMinute = data.end % 100 === 0 ? "00" : data.end % 100;
		return (
			<div
				className="flex flex-row items-start space-x-4 pt-10"
				key={index}>
				{/* Time */}
				<div className="left-10 w-20">
					<h3 className="font-bold text-white">
						{startHour + ":" + startMinute + " -"}
					</h3>
					<h3 className="font-bold text-white">
						{endHour + ":" + endMinute}
					</h3>
				</div>
				<div>
					<div className="flex w-60 flex-col">
						<h3 className="font-bold text-[#3399cc]">
							{lang === "th" ? data.th : data.en}
						</h3>
						{data.isLimited ? (
							<div className="h-4 w-fit rounded bg-[#F03D3E] px-1 text-white underline">
								<h3 className="text-[10px]">LIMITED SEATING</h3>
							</div>
						) : null}
					</div>
					{data.location ? (
						<h4 className="font-bold text-[#CACACA]">
							{"@ " + data.location}
						</h4>
					) : null}
					{/* Description */}
					{/* <h4 className="text-[#CACACA]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute
					</h4> */}
				</div>
			</div>
		);
	});
};

export default MobileColumn;

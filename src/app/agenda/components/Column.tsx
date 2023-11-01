import React, { useState } from "react";
import TimeModal from "./TimeModal";
import Model from "../data/agenda.model";

const Column = (data: Model[], lang: string) => {
	const [hover, setHover] = useState(-1);
	return (
		<div className="mt-1 flex w-1/3 flex-col space-y-1 text-black">
			{data!.map((data, index: number) => {
				const th = data!.th;
				const en = data!.en;
				return (
					<div className="w-full" key={index}>
						<div
							className="relative flex flex-col items-center justify-center rounded"
							onMouseEnter={() => setHover(index)}
							onMouseLeave={() => setHover(-1)}
							style={{
								height: data?.height,
								backgroundColor: data?.th ? "#D9D9D9" : ""
							}}>
							{lang === "th"
								? th?.map((data: string, index: number) => {
									return <h3 key={index}>{data}</h3>;
								  })
								: en?.map((data: string, index: number) => {
									return <h3 key={index}>{data}</h3>;
								  })}
							{hover == index && data?.th ? (
								<TimeModal
									end={data?.end}
									start={data?.start}
								/>
							) : null}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Column;

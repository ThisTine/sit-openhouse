import React, { FC, useState } from "react";
import DDay from "../data/Dday";
import ICTChallenge from "../data/ICT";
import OpenHouseStage from "../data/OpenHouseStage";
import OpenHouseWorkshop from "../data/OpenHouseWorkshop";
import Column from "./Column";

const AllTable: FC<{ lang: string; filter: number }> = ({ lang, filter }) => {
	return (
		<>
			<Column data={DDay} filter={filter} lang={lang} type={3} />
			<Column data={ICTChallenge} filter={filter} lang={lang} type={2} />
			<Column
				data={OpenHouseStage}
				filter={filter}
				lang={lang}
				type={1}
			/>
			<Column
				data={OpenHouseWorkshop}
				filter={filter}
				lang={lang}
				type={1}
			/>
		</>
	);
};

export default AllTable;

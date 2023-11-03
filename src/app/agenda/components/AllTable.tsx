import React, { FC, useState } from "react";
import DDay from "../data/Dday";
import ICTChallengeShort from "../data/ICT_Shorten";
import OpenHouseStage_Shorten from "../data/OpenHouseStage_Shorten";
import OpenHouseWorkshop_Shorten from "../data/OpenHouseWorkshop_Shorten";
import Column from "./Column";

const AllTable: FC<{ lang: string; filter: number }> = ({ lang, filter }) => {
	return (
		<>
			<Column data={DDay} filter={filter} lang={lang} type={3} />
			<Column
				data={ICTChallengeShort}
				filter={filter}
				lang={lang}
				type={2}
			/>
			<Column
				data={OpenHouseStage_Shorten}
				filter={filter}
				lang={lang}
				type={1}
			/>
			<Column
				data={OpenHouseWorkshop_Shorten}
				filter={filter}
				lang={lang}
				type={1}
			/>
		</>
	);
};

export default AllTable;

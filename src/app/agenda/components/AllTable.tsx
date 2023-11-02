import React, { FC, useState } from "react";
import DDay from "../data/Dday";
import ICTChallengeShort from "../data/ICT_Shorten";
import OpenHouseStage_Shorten from "../data/OpenHouseStage_Shorten";
import OpenHouseWorkshop_Shorten from "../data/OpenHouseWorkshop_Shorten";
import Column from "./Column";

const AllTable: FC<{ lang: string }> = ({ lang }) => {
	return (
		<>
			<Column data={DDay} lang={lang} />
			<Column data={ICTChallengeShort} lang={lang} />
			<Column data={OpenHouseStage_Shorten} lang={lang} />
			<Column data={OpenHouseWorkshop_Shorten} lang={lang} />
		</>
	);
};

export default AllTable;

import React, { useState } from "react";
import DDay from "../data/Dday";
import ICTChallengeShort from "../data/ICT_Shorten";
import OpenHouseStage_Shorten from "../data/OpenHouseStage_Shorten";
import OpenHouseWorkshop_Shorten from "../data/OpenHouseWorkshop_Shorten";
import Column from "./Column";

const AllTable = (lang: string) => {
	return (
		<>
			{Column(OpenHouseWorkshop_Shorten, lang)}
			{Column(DDay, lang)}
			{Column(ICTChallengeShort, lang)}
			{Column(OpenHouseStage_Shorten, lang)}
		</>
	);
};

export default AllTable;

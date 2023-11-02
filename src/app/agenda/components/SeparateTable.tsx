import { FC } from "react";
import DDay from "../data/Dday";
import ICT from "../data/ICT";
import OpenHouseStage from "../data/OpenHouseStage";
import openHouseWorkshop from "../data/OpenHouseWorkshop";
import Column from "./Column";

const SeparateTable:FC<{filter: number, lang: string}> = ({filter, lang}) => {
	const render = () => {
		if (filter === 1) {
			return (
				<>
					<Column data={OpenHouseStage} lang={lang} />
					<Column data={openHouseWorkshop} lang={lang} />
				</>
			);
		} else return <Column data={filter === 2 ? ICT : DDay} lang={lang} />;
	};
	return <>{render()}</>;
};

export default SeparateTable;

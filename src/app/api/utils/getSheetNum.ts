import { google } from "googleapis";
import { authFunc } from "./googleAuth";

export const mapper = {
	"Get to know me 'DSI'": "dsi",
	"Easy & Fun java": "java",
	"Let's Explore Web Dev Journey": "web",
	"Talk With Ajarn": "talk",
	"Portfolio": "portfolio"
};
export const tranformer = {
	"dsi":"Get to know me 'DSI'",
	"java":"Easy & Fun java",
	"web":"Let's Explore Web Dev Journey"
};
export const cellEncoder = {
	"dsi": "'Controller'!B2",
	"java": "'Controller'!B3",
	"web":"'Controller'!B4"
};
export interface ISheetData {
    dsi: number;
    java: number;
    web: number;
	talk: number;
	portfolio: number;
};
export const getSheetNum = async ()=>{
	const auth = authFunc();
	const service = google.sheets({version: 'v4', auth});
	let ranges = [
		"'Controller'!A2:B6"
	];
	const reuslt = await service.spreadsheets.values.batchGet({
		spreadsheetId:process.env.SHEETID,
		ranges
	});
	let data = {dsi:0,java:0,web:0,talk:0,portfolio:0};
	reuslt.data.valueRanges?.at(0)?.values?.forEach(
		(i)=>{
			const ax = mapper[(i.at(0) ?? '') as keyof typeof mapper];
			if(ax){
				data[ax as keyof typeof data] = parseInt(i.at(1) ?? "0");
			}
		}
	);
	return {data,service};
};
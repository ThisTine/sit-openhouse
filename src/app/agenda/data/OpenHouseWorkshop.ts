import Agenda from "./agenda.model";
const openHouseWorkshop: Agenda[] = [
	{
		start: 800,
		end: 900,
		height: 155
	},
	{
		th: ["บรรยาย Portfolio สาขา IT"],
		en: ["IT. Major Portfolio Presentation"],
		start: 900,
		end: 920,
		height: 46
	},
	{
		th: ["บรรยาย Portfolio สาขา CS"],
		en: ["CS. Major Portfolio Presentation"],
		start: 920,
		end: 940,
		height: 46
	},
	{
		th: ["บรรยาย Portfolio สาขา DSI"],
		en: ["DSI. Major Portfolio Presentation"],
		start: 940,
		end: 1000,
		height: 46
	},
	{
		start: 1000,
		end: 1030,
		height: 70
	},
	{
		th: ["Workshop สาขา DSI", "Get to know me 'DSI'"],
		en: ["Workshop DSI", "Get to know me 'DSI'"],
		location: "LX 12/1",
		start: 1030,
		end: 1130,
		height: 145
	},
	{
		th: ["พักเที่ยง"],
		en: ["Lunch Break"],
		start: 1130,
		end: 1300,
		height: 215
	},
	{
		th: ["Workshop สาขา CS", "Easy & Fun Java", "(กิจกรรมภาษาอังกฤษ)"],
		en: ["Workshop CS", "Easy & Fun Java", "(English Workshop)"],
		location: "LX 10/5",
		start: 1300,
		end: 1400,
		height: 145
	},
	{
		start: 1400,
		end: 1415,
		height: 34
	},
	{
		th: ["Workshop สาขา IT", "ทำเว็บ Portfolio แบบบ้านๆ"],
		en: ["Workshop IT", "Make your own Portfolio website"],
		location: "LX 10/5",
		start: 1415,
		end: 1515,
		height: 150
	}
];

export default openHouseWorkshop;

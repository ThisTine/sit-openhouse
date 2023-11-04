import Agenda from "./agenda.model";
const openHouseWorkshop: Agenda[] = [
	{
		start: 800,
		end: 900,
		height: 155
	},
	{
		th: ["กิจกรรมการบรรยาย", "เทคนิคการทำพอร์ตโฟลิโอ"],
		en: ["Portfolio Session"],
		start: 900,
		end: 1000,
		height: 138
	},
	{
		start: 1000,
		end: 1015,
		height: 35
	},
	{
		th: ["Workshop สาขา DSI", "Get to know me 'DSI'"],
		en: ["Workshop DSI", "Get to know me 'DSI'"],
		location: "LX 12/1",
		start: 1015,
		end: 1130,
		height: 190
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
		end: 1415,
		height: 175
	},
	{
		th: ["Workshop สาขา IT", "ทำเว็บ Portfolio แบบบ้านๆ"],
		en: ["Workshop IT", "Make your own Portfolio website"],
		location: "LX 10/5",
		start: 1415,
		end: 1545,
		height: 215
	}
];

export default openHouseWorkshop;

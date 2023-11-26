import Agenda from "./agenda.model";

const OpenHouseMobile: Agenda[] = [
	{
		start: 900,
		end: 1000,
		th: ["บรรยายเทคนิคการทำพอร์ตโฟลิโอ"],
		en: ["Portfolio Session"],
		location: "LX 12th floor"
	},
	{
		start: 1015,
		end: 1130,
		th: ["Workshop สาขา DSI Get to know me 'DSI'"],
		en: ["Workshop DSI Get to know me 'DSI'"],
		location: "LX 12th floor",
		isLimited: true
	},
	{
		start: 1300,
		end: 1415,
		th: ["Workshop สาขา CS Easy & Fun Algorithms (กิจกรรมภาษาอังกฤษ)"],
		en: ["Workshop CS Easy & Fun Algorithms (English Workshop)"],
		location: "LX 12th floor",
		isLimited: true
	},
	{
		start: 1430,
		end: 1545,
		th: ["Workshop สาขา IT Let's Explore Web Dev Journey"],
		en: ["Workshop IT Make your own Portfolio website"],
		location: "LX 10th floor",
		isLimited: true
	}
];

export default OpenHouseMobile;

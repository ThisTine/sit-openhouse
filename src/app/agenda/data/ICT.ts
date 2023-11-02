import Agenda from "./agenda.model";
const ICTChallenge: Agenda[] = [
	{
		th: ["ลงทะเบียนเข้าร่วมงาน"],
		en: ["Registration"],
		start: 800,
		end: 900,
		height: 155
	},
	{
		th: ["คณะบดีกล่าวเปิดงาน"],
		en: ["Dean's Opening Speech"],
		start: 900,
		end: 915,
		height: 34
	},
	{
		th: ["พิธีกรแจ้งกำหนดการ"],
		en: ["Agenda Announcement"],
		start: 915,
		end: 930,
		height: 34
	},
	{
		th: ["ผู้เข้าแข่งขันเข้าห้องแข่งขัน"],
		en: ["Contestants enter the contest room"],
		start: 930,
		end: 1000,
		height: 70
	},
	{
		th: ["การแข่งขันรอบคัดเลือก"],
		en: ["Qualifying Round"],
		location: "LX 3 Auditorium",
		start: 1000,
		end: 1130,
		height: 220
	},
	{
		th: ["พักเที่ยง"],
		en: ["Lunch Break"],
		start: 1130,
		end: 1245,
		height: 170
	},
	{
		th: ["ประกาศผลคะแนนรอบคัดเลือก"],
		en: ["Announcement of the Qualifying Round"],
		start: 1245,
		end: 1300,
		height: 40
	},
	{
		th: ["ผู้เข้าแข่งขันเข้าห้องแข่งขัน"],
		en: ["Contestants enter the contest room"],
		start: 1300,
		end: 1315,
		height: 40
	},
	{
		th: ["แข่งขันรอบชิงชนะเลิศ", "ประกาศผล", "พิธีมอบรางวัล"],
		en: ["Final Round", "Announcement of the Winner", "Award Ceremony"],
		location: "LX 3 Auditorium",
		start: 1315,
		end: 1600,
		height: 400
	}
];

export default ICTChallenge;

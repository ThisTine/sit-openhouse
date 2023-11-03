import Agenda from "./agenda.model";
const ICTChallengeShort: Agenda[] = [
	{
		th: ["ลงทะเบียนเข้าร่วมงาน"],
		en: ["Registration"],
		start: 800,
		end: 900,
		height: 155
	},
	{
		th: ["การแข่งขันรอบคัดเลือก"],
		en: ["Qualifying Round"],
		location: "LX 3 Auditorium",
		start: 900,
		end: 1130,
		height: 365
	},
	{
		th: ["พักเที่ยง"],
		en: ["Lunch Break"],
		start: 1130,
		end: 1245,
		height: 180
	},
	{
		th: ["ประกาศผลคะแนนรอบคัดเลือก"],
		en: ["Announcement of the Qualifying Round"],
		start: 1245,
		end: 1300,
		height: 36
	},
	{
		th: ["แข่งขันรอบชิงชนะเลิศ", "ประกาศผล", "พิธีมอบรางวัล"],
		en: ["Final Round", "Announcement of the Winner", "Award Ceremony"],
		location: "LX 3 Auditorium",
		start: 1300,
		end: 1600,
		height: 440
	}
];

export default ICTChallengeShort;

import Agenda from "./agenda.model";

const ICTMobile: Agenda[] = [
	{
		start: 800,
		end: 900,
		th: ["ลงทะเบียนเข้าร่วมงาน"],
		en: ["Registration"],
		location: "Auditorium, LX 3rd floor"
	},
	{
		start: 900,
		end: 930,
		th: ["พิธีเปิดงานและชี้แจงกำหนดการ"],
		en: ["Opening Ceremony"],
		location: "Auditorium, LX 3rd floor"
	},
	{
		start: 1000,
		end: 1130,
		th: ["การแข่งขันรอบคัดเลือก"],
		en: ["Qualifying Round"],
		location: "LX 10th floor"
	},
	{
		start: 1245,
		end: 1300,
		th: ["ประกาศผลรอบคัดเลือก"],
		en: ["Announcement of Qualifying Round"],
		location: "Auditorium, LX 3rd floor"
	},
	{
		start: 1300,
		end: 1600,
		th: ["การแข่งขันรอบชิงชนะเลิศ"],
		en: ["Final Round"]
	}
];

export default ICTMobile;

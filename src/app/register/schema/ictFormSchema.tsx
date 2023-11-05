import { ObjectSchema, object, string } from "yup";
import { ICTChallengeForm, StudentOpenhouseForm } from "../model/formRegister";

export const ictFormAddSchema: ObjectSchema<ICTChallengeForm> = object().shape({
	teamName: string().required("กรุณาใส่ชื่อทีม"),
	schoolName: string().required("กรุณาใส่ชื่อโรงเรียน"),
	schoolAddress: string().required("กรุณาใส่ที่อยู่โรงเรียน"),
	ajarnPrefix: string().required("กรุณาใส่คำนำหน้า"),
	ajarnName: string().required("กรุณาใส่ชื่ออาจารย์"),
	ajarnSurname: string().required("กรุณาใส่นามสกุลอาจารย์"),
	ajarnphoneNum: string().required("กรุณาใส่เบอร์โทรศัพท์").matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง'),
	ajarnEmail: string().matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง').email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),
	ajarnPosition: string().required("กรุณาใส่ตำแหน่ง"),

	prefixMember1: string().required("กรุณาใส่คำนำหน้า"),
	nameMember1: string().required("กรุณาใส่ชื่อ"),
	surnameMember1: string().required("กรุณาใส่นามสกุล"),
	gradeMember1: string().required("กรุณาใส่ชั้นปี"),
	phoneNumMember1: string().required("กรุณาใส่เบอร์โทรศัพท์").matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง'),
	emailMember1: string().matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง').email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),
	facebookMember1: string(),
	lineMember1: string(),

	prefixMember2: string().required("กรุณาใส่คำนำหน้า"),
	nameMember2: string().required("กรุณาใส่ชื่อ"),
	surnameMember2: string().required("กรุณาใส่นามสกุล"),
	gradeMember2: string().required("กรุณาใส่ชั้นปี"),
	phoneNumMember2: string().required("กรุณาใส่เบอร์โทรศัพท์").matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง'),
	emailMember2: string().matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง').email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),
	facebookMember2: string(),
	lineMember2: string(),

	prefixMember3: string().required("กรุณาใส่คำนำหน้า"),
	nameMember3: string().required("กรุณาใส่ชื่อ"),
	surnameMember3: string().required("กรุณาใส่นามสกุล"),
	gradeMember3: string().required("กรุณาใส่ชั้นปี"),
	phoneNumMember3: string().required("กรุณาใส่เบอร์โทรศัพท์").matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง'),
	emailMember3: string().matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง').email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),
	facebookMember3: string(),
	lineMember3: string()


});

export const ophFormAddSchema: ObjectSchema<StudentOpenhouseForm> = object().shape({
	studentName: string().required("กรุณาใส่ชื่อ"),
	studentSurname: string().required("กรุณาใส่นามสกุล"),
	studentPhoneNum: string().required("กรุณาใส่เบอร์โทรศัพท์").matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง'),
	studentEmail: string().required("กรุณาใส่อีเมล").matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'กรุณาตรวจสอบความถูกต้องอีกครั้ง'),
	studentSchoolName: string().required("กรุณาใส่ชื่อโรงเรียน"),
	studentSchoolAddress: string().required("กรุณาใส่ที่อยู่โรงเรียน")

});

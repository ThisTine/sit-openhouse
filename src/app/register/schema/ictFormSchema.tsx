import { ObjectSchema,object, string } from "yup";
import { ICTChallengeForm, StudentOpenhouseForm } from "../model/formRegister";

export const ictFormAddSchema: ObjectSchema<ICTChallengeForm> = object().shape({
	teamName: string().required("กรุณาใส่ชื่อทีม"),
	schoolName: string().required("กรุณาใส่ชื่อโรงเรียน"),
	schoolAddress: string().required("กรุณาใส่ที่อยู่โรงเรียน"),
	ajarnPrefix: string().required("กรุณาใส่คำนำหน้า"),
	ajarnName: string().required("กรุณาใส่ชื่ออาจารย์"),
	ajarnSurname: string().required("กรุณาใส่นามสกุลอาจารย์"),
	ajarnphoneNum: string().required("กรุณาใส่เบอร์โทรศัพท์"),
	ajarnEmail: string().email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),
	ajarnPosition: string().required("กรุณาใส่ตำแหน่ง"),
	
	prefixMember1 : string().required("กรุณาใส่คำนำหน้า"),
	nameMember1 : string().required("กรุณาใส่ชื่อ"),
	surnameMember1 : string().required("กรุณาใส่นามสกุล"),
	gradeMember1 : string().required("กรุณาใส่ชั้นปี"),
	phoneNumMember1 : string().required("กรุณาใส่เบอร์โทรศัพท์"),
	emailMember1 : string().email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),
	facebookMember1 : string(),
	lineMember1 : string(),

	prefixMember2 : string().required("กรุณาใส่คำนำหน้า"),
	nameMember2 : string().required("กรุณาใส่ชื่อ"),
	surnameMember2 : string().required("กรุณาใส่นามสกุล"),
	gradeMember2 : string().required("กรุณาใส่ชั้นปี"),
	phoneNumMember2 : string().required("กรุณาใส่เบอร์โทรศัพท์"),
	emailMember2 : string().email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),	
	facebookMember2 : string(),
	lineMember2 : string(),

	prefixMember3 : string().required("กรุณาใส่คำนำหน้า"),
	nameMember3 : string().required("กรุณาใส่ชื่อ"),
	surnameMember3 : string().required("กรุณาใส่นามสกุล"),
	gradeMember3 : string().required("กรุณาใส่ชั้นปี"),
	phoneNumMember3 : string().required("กรุณาใส่เบอร์โทรศัพท์"),
	emailMember3 : string().email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่อีเมล"),
	facebookMember3 : string(),
	lineMember3 : string()
	
	
});

export const ophFormAddSchema: ObjectSchema<StudentOpenhouseForm> = object().shape({
	studentName: string().required("กรุณาใส่ชื่อ"),
	studentSurname: string().required("กรุณาใส่นามสกุล"),
	studentPhoneNum: string().required("กรุณาใส่เบอร์โทรศัพท์"),
	studentEmail: string().required("กรุณาใส่อีเมล"),
	studentSchoolName: string().email("กรุณาใส่ email ที่ถูกต้อง").required("กรุณาใส่ชื่อโรงเรียน"),
	studentSchoolAddress: string().required("กรุณาใส่ที่อยู่โรงเรียน")

});
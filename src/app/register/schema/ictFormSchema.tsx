import { ObjectSchema,object, string } from "yup";
import { ICTChallengeForm } from "../model/formRegister";

export const ictFormAddSchema: ObjectSchema<ICTChallengeForm> = object().shape({
	teamName: string().required("กรุณาใส่ชื่อทีม"),
	schoolName: string().required("กรุณาใส่ชื่อโรงเรียน"),
	schoolAddress: string().required("กรุณาใส่ที่อยู่โรงเรียน"),
	ajarnPrefix: string().required("กรุณาใส่คำนำหน้า"),
	ajarnName: string().required("กรุณาใส่ชื่ออาจารย์"),
	ajarnSurname: string().required("กรุณาใส่นามสกุลอาจารย์"),
	ajarnphoneNum: string().required("กรุณาใส่เบอร์โทรศัพท์"),
	ajarnEmail: string().required("กรุณาใส่อีเมล"),
	ajarnPosition: string().required("กรุณาใส่ตำแหน่ง")
});

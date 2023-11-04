import { ObjectSchema, object, string } from "yup";
import { ICTChallangeMemberForm } from "../model/formRegister";

export const ICTFormMemberSchema : ObjectSchema<ICTChallangeMemberForm>  = object().shape({
	prefixMember : string().required("กรุณาใส่คำนำหน้า"),
	memberName : string().required("กรุณาใส่ชื่อ"),
	memberSurName: string().required("กรุณาใส่นามสกุล"),
	gradeMember : string().required("กรุณาใส่ชั้นปี"),
	phoneMember : string().required("กรุณาใส่เบอร์โทรศัพท์"),
	emailMember : string().required("กรุณาใส่อีเมล"),
	facebookMember : string(),
	lineMember : string()
    
});
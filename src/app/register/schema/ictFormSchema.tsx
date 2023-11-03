import { Schema, object, string } from "yup";
import { ICTChallengeForm } from "../model/formRegister";

export const ictFormAddSchema: Schema<ICTChallengeForm> = object().shape({
	teamName: string().required("กรุณาใส่ชื่อทีม"),
	schoolName: string().required(),
	schoolAddress: string().required(),
	ajarnPrefix: string().required(),
	ajarnName: string().required(),
	ajarnSurname: string().required(),
	phoneNum: string().required(),
	ajarnEmail: string().required(),
	ajarnPosition: string().required()
});

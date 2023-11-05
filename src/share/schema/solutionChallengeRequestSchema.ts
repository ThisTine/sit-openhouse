import { ObjectSchema, object, string } from "yup";
import { ISolutionChllengeRequest } from "@/share/types/solutionChllengeRequest";

const gmailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{1,6}$/);

export const SolutionChallengeReuqestSchema:ObjectSchema<ISolutionChllengeRequest> = object({
	teamName: string().required(),
	schoolName: string().required(),
	schoolAddress: string().required(),

	// First Person
	firstPersonPrefix: string().required(),
	firstPersonFirstname: string().required(),
	firstPersonLastname: string().required(),
	firstPersonGrade:string().required(),
	firstPersonTel: string().required(),
	firstPersonEmail: string().required().matches(gmailReg),
	firstPersonFacebook: string(),
	firstPersonLineId:string(),

	// Second Person
	secondPersonPrefix: string().required(),
	secondPersonFirstname: string().required(),
	secondPersonLastname: string().required(),
	secondPersonGrade:string().required(),
	secondPersonTel: string().required(),
	secondPersonEmail: string().required().matches(gmailReg),
	secondPersonFacebook: string(),
	secondPersonLineId:string(),

	// Third person
	thirdPersonPrefix: string().required(),
	thirdPersonFirstname: string().required(),
	thirdPersonLastname: string().required(),
	thirdPersonGrade:string().required(),
	thirdPersonTel: string().required(),
	thirdPersonEmail: string().required().matches(gmailReg),
	thirdPersonFacebook: string(),
	thirdPersonLineId:string(),

	//Advisor
	advisorPersonPrefix: string().required(),
	advisorPersonFirstname: string().required(),
	advisorPersonLastname: string().required(),
	advisorPersonTel: string().required(),
	advisorPersonEmail: string().required().matches(gmailReg),
	advisorPosition: string().required()
});
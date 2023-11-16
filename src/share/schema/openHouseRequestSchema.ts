import { AnyObject, ArraySchema, ObjectSchema, array, object, string } from "yup";
import { IOpenHouseRequest } from "../types/openHouseRequest";

export const OpenHouseRequestSchema:ObjectSchema<IOpenHouseRequest> = object({
	prefix: string().required(),
	firstname: string().required(),
	lastname: string().required(),
	grade: string().required(),
	tel: string().required(),
	email: string().required(),
	facebook: string(),
	lineId: string(),
	schoolName: string().required(),
	schoolAddress: string().required(),
	activity: array().of(string()).min(1).max(3).required() as ArraySchema<(string )[], AnyObject, "", "">
});
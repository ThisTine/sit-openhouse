import { OpenHouseRequestSchema } from "@/share/schema/openHouseRequestSchema";
import { IOpenHouseRequest, IOpenHouseRequestMapper, openHouseRequestMapper } from "@/share/types/openHouseRequest";
import { IOpenHouseEmailTemplate, getEmailTemplate, sendmail } from "../../utils/sendmail";
import {nanoid} from 'nanoid';

export async function POST(request: Request) {
	try{
		const req =  await request.json() as IOpenHouseRequest;
		await OpenHouseRequestSchema.validate(req);
        
		const url = process.env.FORM_OPEN_URL || "";

		let gReq:Record<string,string> = {};
		let code = nanoid(5).toString().toLowerCase();
		for(let k of Object.keys(req)){
			let key = openHouseRequestMapper[k as keyof IOpenHouseRequestMapper];
			if(key){
				if(k as keyof IOpenHouseRequest !== "activity")
					gReq[key] = req[k as keyof IOpenHouseRequest] as any;
			}
		}
		gReq[openHouseRequestMapper['code']] = code;

		const params = new URLSearchParams({
			...gReq
		});
		const emailPlaceHolder:IOpenHouseEmailTemplate = {
			":open-name:": req.firstname,
			":open-lastname:": req.lastname,
			":open-pwd:": code,
			":open-event-1:": req.activity[0] ?? '',
			":open-event-2:": req.activity[1] ?? '',
			":open-event-3:": req.activity[2] ?? ''
		};
		for(let activity of req['activity']){
			params.append(openHouseRequestMapper['activity'],activity);
		}

		const info = await fetch(url+'&'+params.toString());
		if(!info.ok){
			return Response.json({error:"Failed send form to API"},{status:400});
		}

		const emailTemplate = await getEmailTemplate({event:"OPENHOUSE", to: req.email, name: req.firstname, openHouseTemplate: emailPlaceHolder});
		await sendmail(emailTemplate);
		return Response.json(req);

	}catch(err){
		return Response.json(err,{status:400});
	}
}
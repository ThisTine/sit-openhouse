import { OpenHouseRequestSchema } from "@/share/schema/openHouseRequestSchema";
import { IOpenHouseRequest, IOpenHouseRequestMapper, openHouseRequestMapper } from "@/share/types/openHouseRequest";
import { IOpenHouseEmailTemplate, getEmailTemplate, sendmail } from "../../utils/sendmail";
import {nanoid} from 'nanoid';
import { getSheetNum, mapper } from "../../utils/getSheetNum";

const openHouseEventMapper = {
	"Get to know me 'DSI'": "Get to know me 'DSI', 10:15-11:30 @LX 12/1",
	"Easy & Fun java": "Easy & Fun java, 13:00-14:15 @LX 10/5",
	"Let's Explore Web Dev Journey": "Let's Explore Web Dev Algorithms, 14:30-15:45 @LX 10/5"
};

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
			":open-event-1:": openHouseEventMapper[(req.activity[0] ?? '') as keyof typeof openHouseEventMapper] ?? '',
			":open-event-2:": openHouseEventMapper[(req.activity[1] ?? '') as keyof typeof openHouseEventMapper] ?? '',
			":open-event-3:": openHouseEventMapper[(req.activity[2] ?? '') as keyof typeof openHouseEventMapper] ?? ''
		};
		const x = await getSheetNum();
		const amount = x.data;
		console.log(amount);
		for(let activity of req['activity']){
			const mapperKey = mapper[activity as keyof typeof mapper]; 
			if(mapperKey && amount[mapperKey as keyof typeof amount] <= 0){
				return Response.json({error:"The amount of "+activity+"Is full"}, {status:500});
			}
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
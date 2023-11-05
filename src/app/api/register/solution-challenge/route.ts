import { SolutionChallengeReuqestSchema } from "@/share/schema/solutionChallengeRequestSchema";
import { getEmailTemplate, sendmail } from "../../utils/sendmail";
import { ISolutionChllengeRequest, solutionChallengeRequestMapper } from "@/share/types/solutionChllengeRequest";


export async function POST(request: Request) {
	try{
		const req =  await request.json() as ISolutionChllengeRequest;
		await SolutionChallengeReuqestSchema.validate(req);
		

		const url = process.env.FORM_URL || "";

		let gReq:Record<string,string> = {};

		for(let k of Object.keys(req)){
			let key = solutionChallengeRequestMapper[k as keyof ISolutionChllengeRequest];
			if(key)
				gReq[key] = req[k as keyof ISolutionChllengeRequest] as any;
		}

		const params = new URLSearchParams({
			...gReq
		});

		const info = await fetch(url+'&'+params);
		if(!info.ok){
			return Response.json({error:"Failed send form to API"},{status:400});
		}
		const emailList = [{email: req.firstPersonEmail,name: req.firstPersonFirstname},
			{email: req.secondPersonEmail,name: req.secondPersonFirstname},
			{email: req.thirdPersonEmail,name: req.thirdPersonFirstname}];

		for(let name of emailList){
			const template =  await getEmailTemplate({
				event:"ICT",
				to: name.email,
				name: name.name
			});
	
			await sendmail(template);
				
		}
		return Response.json(req);

	}catch(err){
		return Response.json(err,{status:400});
	}
	
   
}
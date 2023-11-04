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

		await fetch(url+'&'+params);
		

		const template =  await getEmailTemplate({
			event:"ICT",
			to:[req.firstPersonEmail, req.secondPersonEmail, req.thirdPersonEmail, req.advisorPersonEmail],
			name:req.firstPersonFirstname
		});

		await sendmail(template);

		return Response.json(req);
		
	}catch(err){
		return Response.json(err,{status:400});
	}
	
   
}
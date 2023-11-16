import { getSheetNum } from "@/app/api/utils/getSheetNum";
import { authFunc } from "@/app/api/utils/googleAuth";
import { google } from "googleapis";

const mapper = {
	"Get to know me 'DSI'": "dsi",
	"Easy & Fun java": "java",
	"Let's Explore Web Dev Journey": "web"
};

export async function GET(){
	try{
		const data = await getSheetNum();
		return Response.json(data.data);
	}catch(err){
		return Response.json(err,{status:500});
	}
}
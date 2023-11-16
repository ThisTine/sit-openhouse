import 'server-only';
import { ISheetData} from "@/app/api/utils/getSheetNum";
import Form from "./Form";
async function getData() {
	try{
		const res = await fetch("http://localhost:3000/api/register/open-house/limit", {cache:"no-store"});
	
		if(!res.ok){
			throw new Error("There's a problem in our side, please try again");
		}
		const data = await res.json();	
		return data as ISheetData;
	}catch(err){
		return {dsi:0,java:0,web:0} as ISheetData;
	}
		
} 

export default async function Page(){
	const data = await getData();
	return <Form data={data}/>;
}



/* eslint-disable @next/next/no-async-client-component */
import { ISheetData} from "@/app/api/utils/getSheetNum";
import Form from "./Form";
async function getData() {
	const res = await fetch("http://localhost:3000/api/register/open-house/limit");
	
	if(!res.ok){
		throw new Error("There's a problem in our side, please try again");
	}	
	const data = await res.json();
	console.log(data);
	return data as Promise<ISheetData>;
} 

export default async function Page(){
	const data = await getData();
	return <Form data={data}/>;
}



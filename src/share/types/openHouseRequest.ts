export interface IOpenHouseRequest{
    prefix: string
    firstname: string
    lastname: string
    grade: string
    tel: string
    email: string
    facebook?: string
    lineId?:string
    schoolName: string
    schoolAddress: string
    activity: Array<string>
}

export type IOpenHouseRequestMapper = Omit<IOpenHouseRequest,"activity"> & {activity: string,code: string}

export const openHouseRequestMapper:IOpenHouseRequestMapper= {
	prefix: "entry.2011344925",
	firstname: "entry.512020688",
	lastname: "entry.929852067",
	grade: "entry.495485473",
	tel: "entry.1228615803",
	email: "entry.902329854",
	facebook: "entry.1817499284",
	lineId: "entry.1641259390",
	schoolName: "entry.2033072297",
	schoolAddress: "entry.1700664615",
	activity: "entry.1257167346",
	code: "entry.1329055468"
};
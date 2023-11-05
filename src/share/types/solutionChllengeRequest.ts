export interface ISolutionChllengeRequest{
    teamName: string
    schoolName: string
    schoolAddress: string

    // First Person
    firstPersonPrefix: string
    firstPersonFirstname: string
    firstPersonLastname: string
    firstPersonGrade:string
    firstPersonTel: string
    firstPersonEmail: string
    firstPersonFacebook?: string
    firstPersonLineId?:string

    // Second Person
    secondPersonPrefix: string
    secondPersonFirstname: string
    secondPersonLastname: string
    secondPersonGrade:string
    secondPersonTel: string
    secondPersonEmail: string
    secondPersonFacebook?: string
    secondPersonLineId?:string

    // Third person
    thirdPersonPrefix: string
    thirdPersonFirstname: string
    thirdPersonLastname: string
    thirdPersonGrade:string
    thirdPersonTel: string
    thirdPersonEmail: string
    thirdPersonFacebook?: string
    thirdPersonLineId?:string

    //Advisor
    advisorPersonPrefix: string
    advisorPersonFirstname: string
    advisorPersonLastname: string
    advisorPersonTel: string
    advisorPersonEmail: string
    advisorPosition: string
}

export const solutionChallengeRequestMapper:ISolutionChllengeRequest= {
	teamName: "entry.2044689492",
	schoolName: "entry.613637705",
	schoolAddress: "entry.1271985374",

	// First Person
	firstPersonPrefix: "entry.306284570",
	firstPersonFirstname: "entry.1933840009",
	firstPersonLastname: "entry.2081642472",
	firstPersonGrade: "entry.1027732872",
	firstPersonTel: "entry.125490793",
	firstPersonEmail: "entry.1793120823",
	firstPersonFacebook: "entry.283336619",
	firstPersonLineId: "entry.603661777",

	// Second Person
	secondPersonPrefix: "entry.977128929",
	secondPersonFirstname: "entry.1620389938",
	secondPersonLastname: "entry.1993233634",
	secondPersonGrade: "entry.222367933",
	secondPersonTel: "entry.808734304",
	secondPersonEmail: "entry.401438851",
	secondPersonFacebook: "entry.1560385001",
	secondPersonLineId:"entry.1821532336",

	// Third person
	thirdPersonPrefix: "entry.2124309737",
	thirdPersonFirstname: "entry.1577471645",
	thirdPersonLastname: "entry.1754292822",
	thirdPersonGrade:"entry.636507195",
	thirdPersonTel: "entry.1216640900",
	thirdPersonEmail: "entry.1102402826",
	thirdPersonFacebook: "entry.779713219",
	thirdPersonLineId: "entry.1740344508",

	//Advisor
	advisorPersonPrefix: "entry.754455072",
	advisorPersonFirstname: "entry.2037599455",
	advisorPersonLastname: "entry.805988373",
	advisorPersonTel: "entry.1964139087",
	advisorPersonEmail: "entry.1542676626",
	advisorPosition: "entry.75846424"
};
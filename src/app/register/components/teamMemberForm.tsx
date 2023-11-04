import { Control, Controller, FieldErrors, useForm } from "react-hook-form";
import { ICTChallengeForm, Igrade, Iprefix } from "../model/formRegister";
import IctMember1Form from "./ictMember1";
import IctMember2Form from "./ictMember2";
import IctMember3Form from "./ictMember3";

export interface IteamMemberFormProps {
	formControl : Control<ICTChallengeForm,any>
	formErrors : FieldErrors<ICTChallengeForm>
	prefix : Iprefix[]
	grade : Igrade[]
}


const TeamMemberForm = ({prefix,grade,formControl,formErrors} : IteamMemberFormProps) =>{
	return(
		<div>
			<h2 className="text-lg text-primary">สมาชิกในทีม</h2>
			<IctMember1Form formControl={formControl} formErrors={formErrors} grade={grade} prefix={prefix}/>
			<IctMember2Form formControl={formControl} formErrors={formErrors} grade={grade} prefix={prefix}/>
			<IctMember3Form formControl={formControl} formErrors={formErrors} grade={grade} prefix={prefix}/>
		</div>
	);
};export default TeamMemberForm;
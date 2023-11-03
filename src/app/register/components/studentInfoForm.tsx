import React from 'react';
import { Igrade, Iprefix, StudentOpenhouseForm } from '../model/formRegister';
import { Control, Controller, FieldErrors } from "react-hook-form";
interface ITeamInfoFormProps {
    prefix : Iprefix[]
    grade : Igrade[]
	formControl : Control<StudentOpenhouseForm,any>
	formErrors : FieldErrors<StudentOpenhouseForm>
}
const studentInfoForm = () => {
	return (
		<div>studentInfoForm</div>
	);
};

export default studentInfoForm;
"use client"; 
import { Box, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import TeamMemberForm from "./teamMemberForm";
import React, { useState } from "react";
import { ICTChallengeForm, Igrade, Iprefix } from "../model/formRegister";
import { Control, Controller, FieldErrors } from "react-hook-form";
import AjarnIctForm from "./ajarnForm";

interface ITeamInfoFormProps {
    prefix : Iprefix[]
    grade : Igrade[]
	formControl : Control<ICTChallengeForm,any>
	formErrors : FieldErrors<ICTChallengeForm>
}

const TeamInfoForm = ({prefix,grade,formControl,formErrors}: ITeamInfoFormProps) => {
	return (
		<div className="p-8">
			<div className="col-span-4">
				<h1 className="text-3xl text-primary">โรงเรียน</h1>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="teamName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อทีม *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.teamName}
								 />
								 <div className="text-red-600">{formErrors.teamName?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="schoolName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4 ">ชื่อโรงเรียน *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.schoolName}
								 />
								 <div className="text-red-600">{formErrors.schoolName?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			<div className="py-5">
				<Controller
					control={formControl}
					name="schoolAddress"
					render={({ field }) => (
						<div>
							<h2 className="text-gray-4 ">ที่อยู่โรงเรียน *</h2>
							<TextareaAutosize
								minRows={5}
								{...field}
								className="w-full rounded-lg bg-white p-3"
								 />
								 <div className="text-red-600">{formErrors.schoolAddress?.message}</div>
						</div>
					)}
				/>
				<p className="text-gray-4">{`** กรุณาใส่ข้อมูลให้ครบ เลขที่ ซอย/ถนน แขวง/ตําบล เขต/อําเภอ จังหวัด รหัสไปรษณีย์ ที่อยู่ในการจัดส่งเกียรติบัตร 
    (หากเป็นที่อยู่เดียวกับโรงเรียน ให้ระบุว่า "ที่อยู่เดียวกับโรงเรียน")`}</p>
			</div>
			<TeamMemberForm formControl={formControl} formErrors={formErrors} grade={grade} prefix={prefix}/>
			<AjarnIctForm formControl={formControl} formErrors={formErrors} prefix={prefix}/>
		</div>
	);
};
export default TeamInfoForm;
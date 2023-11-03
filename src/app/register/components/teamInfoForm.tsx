/* eslint-disable max-lines */
"use client"; 
import { Box, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import TeamMemberForm from "./teamMemberForm";
import React, { useState } from "react";
import { ICTChallengeForm, Igrade, Iprefix } from "../model/formRegister";
import { Control, Controller, FieldErrors } from "react-hook-form";

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
				<h1 className="text-xl text-primary">โรงเรียน</h1>
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
			</div>
			<TeamMemberForm grade={grade} prefix={prefix}/>
			<h2 className="text-xl text-primary">อาจารย์ที่ปรึกษาทีม</h2>
			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-7 py-5  md:col-span-1">
					<h2 className="text-gray-4">คำนำหน้า *</h2>
					<Controller control={formControl} name="ajarnPrefix" render={({ field: { onChange, ...rest }})=>(
						<div>
							<Select
								fullWidth
								size="medium"
								{...rest}
								className="rounded-lg bg-white"
								error={!!formErrors.ajarnPrefix}
								onChange={(e,data)=>{
									onChange(e,data);
								}}
							>
								{prefix.map((item)=>(
									<MenuItem  key={item.value} value={item.value}>{item.label}</MenuItem>
								))}
							</Select>
							<div className="text-red-500">{formErrors.ajarnPrefix?.message}</div>
						</div>
					)}/>
				</div>
				
				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อจริง *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnName}
								 />
								 <div className="text-red-600">{formErrors.ajarnName?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnSurname"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">นามสกุล *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnSurname}
								 />
								 <div className="text-red-600">{formErrors.ajarnSurname?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnphoneNum"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">เบอร์โทร *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnphoneNum}
								 />
								 <div className="text-red-600">{formErrors.ajarnphoneNum?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnEmail"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">Email (Gmail เท่านั้น) *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnEmail}
								 />
								 <div className="text-red-600">{formErrors.ajarnEmail?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			<Controller
				control={formControl}
				name="ajarnPosition"
				render={({ field }) => (
					<div>
						<h2 className="text-gray-4">กลุ่มสาระการเรียนรู้ที่สังกัด หรือตําแหน่งปัจจุบัน *</h2>
						<div className="grid grid-cols-6 gap-4">
							<div className="col-span-6 md:col-span-4">
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnPosition}
								 />
							</div>
						</div>
								 <div className="text-red-600">{formErrors.ajarnPosition?.message}</div>
					</div>
				)}
			/>
		</div>
	);
};
export default TeamInfoForm;
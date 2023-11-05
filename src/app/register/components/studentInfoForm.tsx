'use client';
import React from 'react';
import { Igrade, Iprefix, StudentOpenhouseForm } from '../model/formRegister';
import { Control, Controller, FieldErrors } from "react-hook-form";
import { MenuItem, Select, TextField, TextareaAutosize } from '@mui/material';
interface ITeamInfoFormProps {
    prefix : Iprefix[]
    grade : Igrade[]
	formControl : Control<StudentOpenhouseForm,any>
	formErrors : FieldErrors<StudentOpenhouseForm>
}
const StudentInfoForm = ({
	prefix,
	grade,
	formControl,
	formErrors
}: ITeamInfoFormProps) => {
	return (
		<div className="p-8">
			<div className="col-span-4">
				<h1 className="text-3xl text-primary">ข้อมูลนักเรียน</h1>
			</div>
			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-7 py-5  md:col-span-1">
					<h2 className="text-gray-4">คำนำหน้า *</h2>
					<Controller control={formControl} name="studentPrefix" render={({ field: { onChange, ...rest }})=>(
						<div>
							<Select
								fullWidth
								size="medium"
								{...rest}
								className="rounded-lg bg-white"
								error={!!formErrors.studentPrefix}
								onChange={(e,data)=>{
									onChange(e,data);
								}}
							>
								{prefix.map((item)=>(
									<MenuItem  key={item.value} value={item.value}>{item.label}</MenuItem>
								))}
							</Select>
							<div className="text-red-500">{formErrors.studentPrefix?.message}</div>
						</div>
					)}/>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="studentName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อจริง *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.studentName}
								/>
								<div className="text-red-600">
									{formErrors.studentName?.message}
								</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="studentSurname"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4 ">นามสกุล *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.studentSurname}
								/>
								<div className="text-red-600">
									{formErrors.studentSurname?.message}
								</div>
							</div>
						)}
					/>
				</div>
			</div>
			<div className="py-5">
				<h2 className="text-gray-4">ระดับชั้นที่กำลังศึกษาอยู่*</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 md:col-span-2">
						<Controller control={formControl} name="studentGrade" render={({ field: { onChange, ...rest }})=>(
							<div>
								<Select
									fullWidth
									size="medium"
									{...rest}
									className="rounded-lg bg-white"
									error={!!formErrors.studentGrade}
									onChange={(e,data)=>{
										onChange(e,data);
									}}
								>
									{grade.map((item)=>(
										<MenuItem  key={item.value} value={item.value}>{item.label}</MenuItem>
									))}
								</Select>
								<div className="text-red-500">{formErrors.studentGrade?.message}</div>
							</div>
						)}/>
					</div>
				</div>
			</div>
			
			<h2 className="py-3 text-xl text-primary">ช่องทางการติดต่อ</h2>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="studentPhoneNum"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">เบอร์โทร *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.studentPhoneNum}
								 />
								 <div className="text-red-600">{formErrors.studentPhoneNum?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="studentEmail"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">Email (Gmail เท่านั้น) *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.studentEmail}
								 />
								 <div className="text-red-600">{formErrors.studentEmail?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="studentFacebook"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">Facebook (ไม่บังคับ)</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.studentFacebook}
								 />
								 <div className="text-red-600">{formErrors.studentFacebook?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="StudentLine"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">Line ID (ไม่บังคับ) *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.StudentLine}
								 />
								 <div className="text-red-600">{formErrors.StudentLine?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			<div className="py-5">
				<div className="px-1">
					<Controller
						control={formControl}
						name="studentSchoolName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อโรงเรียน *</h2>
								<div className="grid grid-cols-6 gap-4">
									<div className="col-span-6 md:col-span-4">
										<TextField
											fullWidth
											size="medium"
											{...field}
											className="rounded-lg bg-white"
											error={!!formErrors.studentSchoolName}
								 />
									</div>
								</div>
								 <div className="text-red-600">{formErrors.studentSchoolName?.message}</div>
							</div>
						)}
					/>
				</div>
				<Controller
					control={formControl}
					name="studentSchoolAddress"
					render={({ field }) => (
						<div>
							<h2 className="text-gray-4 ">ที่อยู่โรงเรียน *</h2>
							<TextareaAutosize
								minRows={5}
								{...field}
								className="w-full rounded-lg bg-white p-3"
							/>
							<div className="text-red-600">
								{formErrors.studentSchoolAddress?.message}
							</div>
						</div>
					)}
				/>
				<p className="text-gray-4">{`** กรุณาใส่ข้อมูลให้ครบ เลขที่ ซอย/ถนน แขวง/ตําบล เขต/อําเภอ จังหวัด รหัสไปรษณีย์ ที่อยู่ในการจัดส่งเกียรติบัตร 
    (หากเป็นที่อยู่เดียวกับโรงเรียน ให้ระบุว่า "ที่อยู่เดียวกับโรงเรียน")`}</p>
			</div>
			
		</div>
	);
};

export default StudentInfoForm;
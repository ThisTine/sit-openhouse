/* eslint-disable max-lines */
import { TextField, TextareaAutosize, Button, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { ICTChallangeMemberForm, Igrade, Iprefix } from "../model/formRegister";
import { ICTFormMemberSchema } from "../schema/ictFormMember";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IteamMemberFormProps {
	prefix : Iprefix[]
	grade : Igrade[]
}


const TeamMemberForm = ({prefix,grade} : IteamMemberFormProps) =>{
	const [PrefixMember , setPrefixMember] = useState('');
	const [member, setMember] = useState(1);
	const { handleSubmit, control,formState: { errors } ,reset } = useForm({resolver : yupResolver(ICTFormMemberSchema),defaultValues:{
		prefixMember : '',
		memberName : '',
		memberSurName: '',
		gradeMember : '',
		phoneMember : '',
		emailMember : '',
		facebookMember : '',
		lineMember : ''
	
	}});
	const handleMemeberNext = () =>{
		if(member <3){
			setMember(member+1);
		}
	};
	const handleMemeberBack = () =>{
		if(member >1){
			setMember(member-1);
		}
	};
	const onSubmit = (data : ICTChallangeMemberForm) =>{
		console.log(data);
		reset();
		handleMemeberNext();
	};
	return(
		<div>
			<h2 className="text-lg text-primary">สมาชิกในทีม</h2>
			<div className="my-3">
				<div className="flex gap-4">
					<div className={(member == 1) ? 'rounded-lg bg-primary p-2 text-white opacity-100' :'rounded-lg bg-primary p-2 text-white opacity-50'}>คนที่ 1</div>
					<div className={(member == 2) ? 'rounded-lg bg-primary p-2 text-white opacity-100' :'rounded-lg bg-primary p-2 text-white opacity-50'}>คนที่ 2</div>
					<div className={(member == 3) ? 'rounded-lg bg-primary p-2 text-white opacity-100' :'rounded-lg bg-primary p-2 text-white opacity-50'}>คนที่ 3</div>
				</div>
			</div>
			<h2 className="text-primary">ข้อมูลส่วนตัว</h2>
			
			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-7 py-5 md:col-span-1">
					<h2 className="text-gray-4">คำนำหน้า*</h2>
					<Controller control={control} name="prefixMember" render={({ field: { onChange, ...rest }})=>(
						<div>
							<Select
								fullWidth
								size="medium"
								{...rest}
								className="rounded-lg bg-white"
								error={!!errors.prefixMember}
								onChange={(e,data)=>{
									onChange(e,data);
								}}
							>
								{prefix.map((item)=>(
									<MenuItem  key={item.value} value={item.value}>{item.label}</MenuItem>
								))}
							</Select>
							<div className="text-red-500">{errors.prefixMember?.message}</div>
						</div>
					)}/>
				</div>
				
				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={control}
						name="memberName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อจริง *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!errors.memberName}
								 />
								 <div className="text-red-600">{errors.memberName?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={control}
						name="memberSurName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อนามสกุล *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!errors.memberSurName}
								 />
								 <div className="text-red-600">{errors.memberSurName?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			
			<div className="py-5">
				<h2 className="text-gray-4">ระดับชั้นที่กำลังศึกษาอยู่*</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 md:col-span-2">
						<Controller control={control} name="gradeMember" render={({ field: { onChange, ...rest }})=>(
							<div>
								<Select
									fullWidth
									size="medium"
									{...rest}
									className="rounded-lg bg-white"
									error={!!errors.gradeMember}
									onChange={(e,data)=>{
										onChange(e,data);
									}}
								>
									{grade.map((item)=>(
										<MenuItem  key={item.value} value={item.value}>{item.label}</MenuItem>
									))}
								</Select>
								<div className="text-red-500">{errors.gradeMember?.message}</div>
							</div>
						)}/>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-base text-primary">ช่องทางการติดต่อ</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={control}
							name="phoneMember"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">เบอร์โทรศัพท์ *</h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
										error={!!errors.phoneMember}
								 />
								 <div className="text-red-600">{errors.phoneMember?.message}</div>
								</div>
							)}
						/>
					</div>
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={control}
							name="emailMember"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">Email (Gmail เท่านั้น) *</h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
										error={!!errors.emailMember}
								 />
								 <div className="text-red-600">{errors.emailMember?.message}</div>
								</div>
							)}
						/>
					</div>
				</div>
				
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={control}
							name="facebookMember"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">Facebook (ไม่บังคับ) </h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
								 />
								</div>
							)}
						/>					<h2 className="text-gray-4">Email (Gmail เท่านั้น) *</h2>
					</div>
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={control}
							name="lineMember"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">Line ID (ไม่บังคับ) </h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
								 />
								</div>
							)}
						/>					
					</div>
				
				</div>
			</div>
			
			<div className="my-5 flex justify-between">
				<Button onClick={handleMemeberBack} variant="outlined">ย้อนกลับ</Button>
				<Button className="bg-primary" onClick={handleSubmit(onSubmit)} variant="contained">คนถัดไป</Button>
			</div>
		</div>
	);
};export default TeamMemberForm;
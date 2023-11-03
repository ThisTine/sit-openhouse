import { TextField, TextareaAutosize, Button, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Igrade, Iprefix } from "../model/formRegister";

interface IteamMemberFormProps {
	prefix : Iprefix[]
	grade : Igrade[]

}


const TeamMemberForm = ({prefix,grade} : IteamMemberFormProps) =>{
	const [PrefixMember , setPrefixMember] = useState('');
	const [Grade , setGrade] = useState('');
	const [member, setMember] = useState(1);
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
					<Select
                	className="bg-white"
						fullWidth
						onChange={(e)=>setPrefixMember(e.target.value as string)}
						value={PrefixMember}
					>
						{prefix.map((item) => (
							<MenuItem key={item.value} value={item.value}>
								{item.label}
							</MenuItem>
						))}
					</Select>
				</div>
				
				<div className="col-span-7 py-5 md:col-span-3">
					<h2 className="text-gray-4">ชื่อจริง *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
				<div className="col-span-7 py-5 md:col-span-3">
					<h2 className="text-gray-4">ชื่อนามสกุล *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
			</div>
			
			<div className="py-5">
				<h2 className="text-gray-4">ระดับชั้นที่กำลังศึกษาอยู่*</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 md:col-span-2">
						<Select
							className="bg-white"
							fullWidth
							onChange={(e)=>setGrade(e.target.value as string)}
							value={Grade}
						>
							{grade.map((item) => (
								<MenuItem key={item.value} value={item.value}>
									{item.label}
								</MenuItem>
							))}
						</Select>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-base text-primary">ช่องทางการติดต่อ</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 py-5 md:col-span-3">
						<h2 className="text-gray-4">เบอร์โทรศัพท์ *</h2>
						<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
					</div>
					<div className="col-span-6 py-5 md:col-span-3">
						<h2 className="text-gray-4">Email (Gmail เท่านั้น) *</h2>
						<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
					</div>
				</div>
				
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 py-5 md:col-span-3">
						<h2 className="text-gray-4">Facebook (ไม่บังคับ) </h2>
						<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
					</div>
					<div className="col-span-6 py-5 md:col-span-3">
						<h2 className="text-gray-4">Line ID (ไม่บังคับ) </h2>
						<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
					</div>
				
				</div>
			</div>
			
			<div className="my-5 flex justify-between">
				<Button onClick={handleMemeberBack} variant="outlined">ย้อนกลับ</Button>
				<Button className="bg-primary" onClick={handleMemeberNext} variant="contained">คนถัดไป</Button>
			</div>
		</div>
	);
};export default TeamMemberForm;
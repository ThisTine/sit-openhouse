import { Select, TextField, TextareaAutosize } from "@mui/material";
import TeamMemberForm, { ITeamInfoFormProps } from "./teamMemberForm";

const TeamInfoForm = ({prefix,grade}: ITeamInfoFormProps) => {
	return (
		<div className="p-8">
			<div className="col-span-4">
				<h1 className="text-xl text-primary">โรงเรียน</h1>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<h2 className="text-gray-4">ชื่อทีม *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth  size="medium"/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<h2 className="text-gray-4 ">ชื่อโรงเรียน *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
			</div>
			<div className="py-5">
				<h2 className="text-gray-4">ที่อยู่โรงเรียน *</h2>
				<TextareaAutosize  className="w-full rounded-lg bg-white p-3" minRows={5} />
			</div>
			<TeamMemberForm grade={grade} prefix={prefix}/>
			<h2 className="text-primary">อาจารย์ที่ปรึกษาทีม</h2>
			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-7 py-5 md:col-span-1">
					<h2 className="text-gray-4">คำนำหน้า*</h2>
					<Select
						className="bg-white"
						fullWidth
					// onChange={handleChange}
					// value={age}
					>
						{prefix.map((item) => (
							<option key={item.value} value={item.value} >
								{item.label}
							</option>
						))}
					</Select>
				</div>
				
				<div className="col-span-7 py-5 md:col-span-3">
					<h2 className="text-gray-4">ชื่อจริง *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
				<div className="col-span-7 py-5 md:col-span-3">
					<h2 className="text-gray-4">นามสกุล *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<h2 className="text-gray-4">เบอร์โทร *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<h2 className="text-gray-4">Email (Gmail เท่านั้น) *</h2>
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
			</div>
			<h2 className="text-gray-4">กลุ่มสาระการเรียนรู้ที่สังกัด หรือตําแหน่งปัจจุบัน *</h2>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 md:col-span-4">
					<TextField  className="rounded-lg bg-white" fullWidth size="medium"/>
				</div>
			</div>
		</div>
	);
};

export default TeamInfoForm;
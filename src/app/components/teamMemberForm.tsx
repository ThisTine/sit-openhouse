import { TextField, TextareaAutosize, Button, Select } from "@mui/material";

export interface ITeamInfoFormProps {
    prefix : {
        value: string;
        label: string;
    }[]
    grade : {
        value: string;
        label: string;
    }[]
}

const TeamMemberForm = ({prefix,grade} : ITeamInfoFormProps) =>{
	return(
		<div>
			<h2 className="text-lg text-primary">สมาชิกในทีม</h2>
			<div className="my-3">
				<div className="flex gap-4">
					<Button className="bg-primary text-white opacity-50 hover:opacity-100" variant="contained" >คนที่ 1</Button>
					<Button className="bg-primary text-white opacity-50 hover:opacity-100" variant="contained" >คนที่ 2</Button>
					<Button className="bg-primary text-white opacity-50 hover:opacity-100" variant="contained" >คนที่ 3</Button>
				</div>
			</div>
			<h2 className="text-primary">ข้อมูลส่วนตัว</h2>
			<div>
				<div className="py-5">
					<h2 className="text-gray-4">คำนำหน้า*</h2>
					<Select
                	className="bg-white"
						fullWidth
						// onChange={handleChange}
						// value={age}
					>
						{prefix.map((item) => (
							<option key={item.value} value={item.value}>
								{item.label}
							</option>
						))}
					</Select>
				</div>
				<div className="py-5">
					<h2 className="text-gray-4">ชื่อจริง *</h2>
					<TextField  className="bg-white" fullWidth size="medium"/>
				</div>
				<div className="py-5">
					<h2 className="text-gray-4">ชื่อนามสกุล *</h2>
					<TextField  className="bg-white" fullWidth size="medium"/>
				</div>
			</div>
			<div className="py-5">
				<h2 className="text-gray-4">ระดับชั้นที่กำลังศึกษาอยู่*</h2>
				<Select
					className="bg-white"
					fullWidth
					// onChange={handleChange}
					// value={age}
				>
					{grade.map((item) => (
						<option key={item.value} value={item.value}>
							{item.label}
						</option>
					))}
				</Select>
			</div>
			<div>
				<h2 className="text-base text-primary">ช่องทางการติดต่อ</h2>
				<div className="py-5">
					<h2 className="text-gray-4">เบอร์โทรศัพท์ *</h2>
					<TextField  className="bg-white" fullWidth size="medium"/>
				</div>
				<div className="py-5">
					<h2 className="text-gray-4">Email (Gmail เท่านั้น) *</h2>
					<TextField  className="bg-white" fullWidth size="medium"/>
				</div>
				<div className="py-5">
					<h2 className="text-gray-4">Facebook (ไม่บังคับ) *</h2>
					<TextField  className="bg-white" fullWidth size="medium"/>
				</div>
				<div className="py-5">
					<h2 className="text-gray-4">Line ID (ไม่บังคับ) *</h2>
					<TextField  className="bg-white" fullWidth size="medium"/>
				</div>
			</div>
			<div className="my-5 flex justify-between">
				<Button variant="outlined">ย้อนกลับ</Button>
				<Button className="bg-primary" variant="contained">ถัดไป</Button>
			</div>
		</div>
	);
};

export default TeamMemberForm;
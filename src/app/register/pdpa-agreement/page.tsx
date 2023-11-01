import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import PdpaText from "@/app/register/components/pdpaText";

const PDPAagreementPage = () => {
	return (
		<div style={{backgroundColor:"#34312F"}}>
			<div className="p-5">
				<div className="flex justify-between py-3">
					<div>
						<Button>
							<ArrowBackIosNewIcon className="text-white" />
							<p className="text-xl text-text-primary">Back</p>
						</Button>
					</div>
					<Image alt="sit-logo" height={200} src="/assets/sit_logo.png" width={200} />
				</div>
				<div>
					<h2 className="my-5 text-xl text-primary">หนังสือยินยอมเพื่อขอใช้ประโยชน์
                    ข้อมูลส่วนบุคคล</h2>
					<div className="my-5 text-gray-3">
						<p>คณะเทคโนโลยีสารสนเทศ</p>
						<p>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
					</div>
				</div>
				<div className="relative my-3 rounded-xl bg-primary">
					<div className="relative bottom-3 right-3 rounded-xl bg-gray-2">
						<PdpaText/>
					</div>
				</div>
				<div className="my-5 flex flex-col gap-5">
					<Button className="h-12" fullWidth variant="outlined">ย้อนกลับ</Button>
					<Button className="h-12 bg-primary" variant="contained">ยอมรับและยื่นยันการลงทะเบียน</Button>
				</div>
			</div>
		</div>);
};
export default PDPAagreementPage;
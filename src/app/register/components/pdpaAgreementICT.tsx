import { Button } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import PdpaText from "./pdpaText";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { registerPage } from "../model/formRegister";
import { useRouter } from 'next/navigation';
interface PDPAagreementPageProps {
    setPage : Dispatch<SetStateAction<registerPage>>;
}
const PDPAagreementPageICT = ({setPage} : PDPAagreementPageProps) => {
	const router = useRouter();
	return (
		<div className="md:h-screen" style={{backgroundColor:"#34312F"}} >
			<div className="p-5">
				<div className="mt-20 flex justify-between">
					<div>
						{/* <Button onClick={()=> router.back()}>
							<ArrowBackIosNewIcon className="text-white" />
							<p className="text-xl text-text-primary">Back</p>
						</Button> */}
					</div>
				</div>
				<div>
					<h2 className="my-5 text-xl text-primary  md:text-5xl">หนังสือยินยอมเพื่อขอใช้ประโยชน์
                    ข้อมูลส่วนบุคคล</h2>
					<div className="my-8 text-gray-3 md:flex">
						<p>คณะเทคโนโลยีสารสนเทศ</p>
						<p>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
					</div>
				</div>
				<div className="relative my-3 rounded-xl bg-primary">
					<div className="relative bottom-3 right-3 rounded-xl bg-gray-2">
						<PdpaText/>
					</div>
				</div>
				<div className="my-5 flex flex-col gap-5  md:flex-row md:justify-between">
					<Button className="h-12" onClick={()=> router.back()}  variant="outlined">ย้อนกลับ</Button>
					<Button className="h-12 bg-primary" onClick={()=>setPage(registerPage.ictFormPage)} variant="contained">ยอมรับและยืนยันการลงทะเบียน</Button>
				</div>
			</div>
		</div>);
};
export default PDPAagreementPageICT;

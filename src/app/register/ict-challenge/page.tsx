'use client';
// Page for Register Form
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Button} from "@mui/material";

import { grade, prefix } from "../constant/formConst";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { ictFormAddSchema } from "../schema/ictFormSchema";
import { registerPage } from "../model/formRegister";
import { useState } from "react";
import React from "react";
import TeamInfoForm from "../components/teamInfoForm";
import CongratICT from "../components/CongratICT";
import PDPAagreementPage from "../components/pdpaAgreement";
import FailRegister from "../components/FailRegister";
import ConfirmModalICT from "../components/confirmModal_ICT";

const SolutionFormPage = () => {
	const { handleSubmit, control,formState: { errors } } = useForm({resolver : yupResolver(ictFormAddSchema)});
	const [Page , setPage] = useState<registerPage>(registerPage.pdapaPage);

	if(Page === registerPage.ictFormPage) {
		return(
			<div style={{backgroundColor:"#34312F" , padding:'30px'}}>
				<div className="p-5">
					<div className="flex justify-between py-3">
						<div>
							<Button onClick={()=>setPage(registerPage.pdapaPage)}>
								<ArrowBackIosNewIcon className="text-white" />
								<p className="text-xl text-text-primary">Back</p>
							</Button>
						</div>

					</div>
					<div className="w-72 md:w-full">
						<h1 className="text-3xl font-bold" style={{color:"#3399CC"}}>แบบฟอร์มลงทะเบียน ICT Challenge 2023 </h1>
					</div>
					<div>
						<p className="py-3  text-gray-3">
						การลงทะเบียนเข้าแข่งขัน ICT Challenge 2023 ผู้เข้าแข่งขันหนึ่งคนสามารถลงทะเบียนได้เพียงหนึ่งทีมเท่านั้น และให้ตัวแทนทีมเป็นคนกรอกข้อมูลเพียงคนเดียว โดยหลังจากส่งฟอร์มเรียบร้อย สมาชิกในทีมทุกท่านจะได้รับอีเมลยืนยันการสมัครและแบบทดสอบเพื่อคัดเลือก โดยต้องทำแบบทดสอบให้เสร็จสิ้นตามกำหนดเวลา และรอการประกาศผลทีมที่เข้ารอบต่อไป
						</p>
					</div>
					<div className="relative my-3 rounded-xl bg-primary">
						<div className="relative bottom-3 right-3 rounded-xl bg-gray-2">
							<TeamInfoForm formControl={control} formErrors={errors} grade={grade} prefix={prefix}/>
						</div>
					</div>
					<div className="m-2">
						<p className="flex justify-end text-text-primary">** กรุณาตรวจสอบความถูกต้องให้ครบถ้วนก่อนกดยืนยัน
	      หากกดยืนยันแล้วจะไม่สามารถแก้ไขข้อมูลการสมัครได้</p>
					</div>
					<div>
						<ConfirmModalICT handleOnSubmit={handleSubmit} setPage={setPage}/>
					</div>
				</div>
			</div>
		);
	}
	else if (Page === registerPage.pdapaPage){
		return(
			<PDPAagreementPage setPage={setPage}/>
		);
	}

	else if (Page === registerPage.congratsIct){
		return(
			<CongratICT/>
		);
	}
	else if (Page === registerPage.failCongrats){
		return(
			<FailRegister/>
		);
	}
	

	// ) : ( <CongratICT/> )

};

export default SolutionFormPage;

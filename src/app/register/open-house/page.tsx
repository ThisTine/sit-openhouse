'use client';
import { Button } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { grade, prefix } from "../constant/formConst";
import { UseFormHandleSubmit, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CongratOPH from "../components/CongratOPH";
import Activity from "../components/Activity";
import { ophFormAddSchema } from "../schema/ictFormSchema";
import StudentInfoForm from "../components/studentInfoForm";
import ConfirmModal_OPH from "../components/confirmModal_OPH";
import ConfirmModalOPH from "../components/confirmModal_OPH";
import { registerPage } from "../model/formRegister";

const OpenhouseRegisterPage = () => {
	const { handleSubmit, control,formState: { errors } } = useForm({resolver : yupResolver(ophFormAddSchema)});
	const [Page , setPage] = useState<registerPage>(registerPage.pdapaPage);
	return (
		//   <CongratOPH/>
		<div style={{ backgroundColor: "#34312F", padding: "30px" }}>
			<div className="p-5">
				<div className="flex justify-between py-3">
					<div>
						<Button>
							<ArrowBackIosNewIcon className="text-white" />
							<p className="text-xl text-text-primary">Back</p>
						</Button>
					</div>
				
				</div>
				<div className="w-72 md:w-full">
					<h1 className="text-3xl font-bold" style={{ color: "#3399CC" }}>
						แบบฟอร์มลงทะเบียนเข้าร่วมกิจกรรม Open house
					</h1>
				</div>
				<div>
					<p className="py-3  text-gray-3">
						ก่อนนี้เธอคงจะปวดร้าว ต้องฝืนอดทนว่าไม่รู้ตัว คงไม่มีทางหรอก
						แต่เธอแค่ไม่กล้าบอก ก่อนนี้โลกดูช่างสดใส ได้ฝืนอดทนไม่ให้รู้ตัว
						เธอนั้นสำคัญเท่าไรฉันแค่ไม่กล้าบอกให้รู้ ฮู้
						คงต้องเข้าใจหากฉันไม่บอกไป
						เธอคงฝืนทนอยู่อย่างนี้เหมือนเดิมอยู่อย่างนี้
						คงไม่เปลี่ยนไปหากฉันยื้อต่อไป
						ให้เธอหายไปจากตรงนี้ให้เธอหายไปไม่ย้อนคืน
					</p>
				</div>
				<div className="relative my-3 rounded-xl bg-primary">
					<div className="relative bottom-3 right-3 rounded-xl bg-gray-2">
						<StudentInfoForm formControl={control} formErrors={errors} grade={grade} prefix={prefix}/>
						<Activity />
					</div>
				</div>
				<div className="m-2">
					<p className="flex justify-end text-text-primary">
						** กรุณาตรวจสอบความถูกต้องให้ครบถ้วนก่อนกดยืนยัน
						หากกดยืนยันแล้วจะไม่สามารถแก้ไขข้อมูลการสมัครได้
					</p>
				</div>
				<div />
			</div>
			<ConfirmModalOPH handleOnSubmit={handleSubmit} setPage={setPage}/>
		</div>
	);
};

export default OpenhouseRegisterPage;
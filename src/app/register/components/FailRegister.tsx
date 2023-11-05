import { Button } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const FailRegister = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-slate-600">
			<div className="flex justify-center align-middle">
				<div className="relative mx-7  rounded-xl bg-primary">
					<div className="relative bottom-3 right-3  rounded-xl bg-gray-2 px-11 py-16 text-center md:p-40">
						<HighlightOffIcon
							className="text-9xl"
							style={{ color: "#FA4515" }}
						/>
						<h1 className="text-3xl font-bold text-primary">
              ดำเนินการไม่สำเร็จ
						</h1>
						<h1 className="text-base  text-slate-800">
              พบข้อผิดพลาดในการลงทะเบียน กรุณาลองใหม่อีกครั้ง
						</h1>
					</div>
				</div>
			</div>
			<Button
				className="m-10 h-12 w-28 bg-primary text-white"
				onClick={() => {}}
				variant="contained"
			>
        เสร็จสิ้น <ArrowBackIosNewIcon className="text-white" />
			</Button>
		</div>
	);
};

export default FailRegister;
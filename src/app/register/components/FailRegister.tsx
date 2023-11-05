'use client';
import { Button } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const FailRegister = () => {
	
	return (

		<div className='min-h-screen w-screen bg-[url("/Group_88.png")] bg-cover bg-fixed'>
			<div className='min-h-screen w-screen bg-gradient-to-b from-gray-600/70 to-gray-600/50 pb-10'>
				<div className="flex min-h-screen flex-col items-center justify-center">	
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
				<div className="flex items-center justify-center">
					<Button
						className="h-12 w-28 bg-primary text-white"
						// onClick={()=> router.back()}
						variant="contained"
					><ArrowBackIosNewIcon className="text-white"/>เสร็จสิ้น 
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FailRegister;
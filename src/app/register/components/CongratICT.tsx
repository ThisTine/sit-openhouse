import { Button } from '@mui/material';
import React from 'react';

const CongratICT = () => {
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-slate-600'>
		
			<div className='flex justify-center align-middle '>
				<div className="relative mx-7  rounded-xl bg-primary" >
					<div className="relative bottom-3 right-3  rounded-xl bg-gray-2 px-11 py-28 md:p-40" >
						<h1 className="text-3xl font-bold text-primary "  >
						ลงทะเบียนสำเร็จ
						</h1>
						<h1 className="text-base  text-slate-800 "  >
						คุณได้ลงทะเบียนเข้าร่วมงาน ICT Challenge 2023 แล้ว โปรดตรวจสอบอีเมลของสมาชิกในทีม เพื่อทำแบบทดสอบรอบคัดเลือก 
ภายในวันที่ 16 พฤศจิกายน พ.ศ. 2566 ภายในเวลา 23.59 น.
						</h1>
					</div>
				</div>
			</div>
			<Button className="m-10 h-12 w-32 bg-primary text-white" onClick={()=>{}} variant='contained'>เสร็จสิ้น</Button>
							
		</div>
	);
};

export default CongratICT;
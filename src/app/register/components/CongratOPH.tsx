import { Button } from '@mui/material';
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useRouter} from 'next/navigation';

const CongratOPH = () => {
	const router = useRouter();
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-slate-600'>
			<div className='flex justify-center align-middle'>
				<div className="relative mx-7  rounded-xl bg-primary" >
					<div className="relative bottom-3 right-3  rounded-xl bg-gray-2 px-11 py-16 text-center md:p-40" >
						<CheckCircleOutlineIcon className="text-9xl" style={{color:'61BF00'}} />
						<h1 className="text-3xl font-bold text-primary"  >
						ลงทะเบียนสำเร็จ
						</h1>
						<h1 className="text-base  text-slate-800"  >
						คุณได้ลงทะเบียนเข้าร่วมงาน SIT Open House 2023 แล้ว โปรดตรวจสอบอีเมลของท่าน 
						</h1>
					</div>
				</div>
			</div>
			<Button className="m-10 h-12 w-32 bg-primary text-white"  onClick={()=>router.push("/")} variant='contained'>เสร็จสิ้น <ArrowForwardIosIcon className="text-white" /></Button>
							
		</div>
	);
};

export default CongratOPH;
import { Button } from '@mui/material';
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CongratICT = () => {
	return (
		<div className='min-h-screen w-screen bg-[url("/Group_88.png")] bg-cover bg-fixed'>
			<div className="flex flex-col items-center justify-center pt-28 md:px-11">	
				<div className="relative mx-7 rounded-xl bg-primary">
					<div className="relative bottom-3 right-3  rounded-xl bg-gray-2 px-11 py-16 text-center md:p-40">
						<CheckCircleOutlineIcon style={{color:'61BF00' , width:'100px' ,height:'100px'}} />
						<h1 className="text-3xl font-bold text-primary" >
						ลงทะเบียนสำเร็จ
						</h1>
						<h1 className="mb-10 text-base text-slate-800"  >
						คุณได้ลงทะเบียนเข้าร่วมงาน ICT Challenge 2023 แล้ว โปรดตรวจสอบอีเมลของสมาชิกในทีม เพื่อทำแบบทดสอบรอบคัดเลือก 
ภายในวันที่ 16 พฤศจิกายน พ.ศ. 2566 ภายในเวลา 23.59 น.
						</h1>
						<Button className="m-10 h-12 w-28 bg-primary text-white" onClick={() => { }} variant='contained'>เสร็จสิ้น
							<ArrowForwardIosIcon className="text-white" />
						</Button>	
					</div>		
				</div>
			</div>
		</div>				
	);
};

export default CongratICT;
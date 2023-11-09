"use client";
import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { red } from "@mui/material/colors";

interface ActivityProps {
	setItCheck : React.Dispatch<React.SetStateAction<boolean>>;
	setCsCheck : React.Dispatch<React.SetStateAction<boolean>>;
	setDsiCheck : React.Dispatch<React.SetStateAction<boolean>>;
}

const Activity = ({setItCheck,setCsCheck,setDsiCheck} : ActivityProps) => {


	const handleChecked1 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDsiCheck(event.target.checked);
	};

	const handleChecked2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCsCheck(event.target.checked);
	};

	const handleChecked3 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setItCheck(event.target.checked);
	};


	return (
		<div className="p-8">
			<div className="col-span-4">
				<h1 className="text-xl text-primary">กิจกรรมที่สนใจเข้าร่วม</h1>
				<div className="relative rounded-xl bg-primary p-3">
					<div>
						<Checkbox onChange={handleChecked1} sx={{color:'white','&.Mui-checked': {
							color: red[500]
						}}} />
						<label className="text-white">
              Get to Know me ‘DSI’ | 10.30 -11.30 น. ( จำกัด 40 ที่นั่ง )
						</label>
						<div className="m-1 mx-5 w-24 rounded-md bg-red-500 p-1 text-center text-xs text-white">
              มีประกาศนียบัตร
						</div>
						<h4 className="mx-5 text-xs text-white">( โดยรุ่นพี่ DSI#2 ) กิจกรรมสุดพิเศษจากสาขา DSI ให้น้อง ๆ มาทำความรู้จักกับการเป็นนวัตกรในโลกยุคดิจิตอล ผ่านกิจกรรม Workshop ตั้งแต่การคิด Solution ให้ตอบโจทย์ลูกค้าสู่การทำ Prototype</h4>
					</div>
				</div>
        	<div className="relative my-2 rounded-xl bg-primary p-3">
					<div>
						<Checkbox  onChange={handleChecked2} sx={{color:'white','&.Mui-checked': {
							color: red[500]
						}}} />
						<label className="text-white">
            Easy & Fun Java | 13.00 - 14.00 น. ( จำกัด 50 ที่นั่ง )
						</label>
						<h1 className="mx-5 text-white">* กิจกรรมถูกจัดเป็นภาษาอังกฤษ</h1>
						<div className="m-1 mx-5 w-24 rounded-md bg-red-500 p-1 text-center text-xs text-white">
              มีประกาศนียบัตร
						</div>
						<h4 className="mx-5 text-xs text-white">เวิร์คช็อปที่จะชวนน้อง ๆ มาร่วมสนุกกับการทำเว็บของตนเอง ด้วย CSS & HTML ซึ่งนอกจากจะได้เรียนรู้แล้ว ยังได้ผลงานติดไม้ติดมือกลับบ้านอีกด้วย !</h4>
					</div>
          	
				</div>
				<div className="relative my-2 rounded-xl bg-primary p-3">
					<div>
						<Checkbox  onChange={handleChecked3} sx={{color:'white','&.Mui-checked': {
							color: red[500]
						}}} />
						<label className="text-white">
              Let&rsquo;s Explore Web Dev Journey | 14.15 - 15.15 น. ( จำกัด 50 ที่นั่ง )
						</label>
						<div className="m-1 mx-5 w-24 rounded-md bg-red-500 p-1 text-center text-xs text-white">
              มีประกาศนียบัตร
						</div>
						<h4 className="mx-5 text-xs text-white">( โดยรุ่นพี่ IT#2 ) เวิร์คช็อปที่จะชวนน้อง ๆ มาร่วมสนุกกับการทำเว็บของตนเอง ด้วย CSS & HTML ซึ่งนอกจากจะได้เรียนรู้แล้ว ยังได้ผลงานติดไม้ติดมือกลับบ้านอีกด้วย !</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activity;
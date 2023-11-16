"use client";
import React, { useMemo, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { red } from "@mui/material/colors";
import { ISheetData } from "@/app/api/utils/getSheetNum";

interface ActivityProps {
	setItCheck : React.Dispatch<React.SetStateAction<boolean>>;
	setCsCheck : React.Dispatch<React.SetStateAction<boolean>>;
	setDsiCheck : React.Dispatch<React.SetStateAction<boolean>>;
	data: ISheetData
}

const Activity = ({setItCheck,setCsCheck,setDsiCheck,data} : ActivityProps) => {
	const isDsi = useMemo(()=>data.dsi > 0, [data.dsi]);
	const isJava = useMemo(()=>data.java > 0,[data.java]);
	const isWeb = useMemo(()=>data.web > 0,[data.web]);

	const handleChecked1 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDsiCheck(event.target.checked);
	};

	const handleChecked2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCsCheck(event.target.checked);
	};

	const handleChecked3 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setItCheck(event.target.checked);
	};
	const outerBoxClassNameBuilder = (x : boolean)=>{
		return `relative rounded-xl ${x?"bg-primary":"bg-gray-400"} p-3 mt-5`;
	};

	return (
		<div className="p-8">
			<div className="col-span-4">
				<h1 className="text-xl text-primary ">กิจกรรมที่สนใจเข้าร่วม</h1>
				<div className={outerBoxClassNameBuilder(isDsi)}>
					<div>
						<Checkbox disabled={!isDsi} onChange={handleChecked1} sx={{color:'white','&.Mui-checked': {
							color: red[500]
						}}} />
						<label className="text-white">
              Get to Know me ‘DSI’ | 10.15 -11.30 น. ( จำกัด 60 ที่นั่ง ) {!isDsi ? "(เต็ม)" : null}
						</label>
						<div className="m-1 mx-5 w-24 rounded-md bg-red-500 p-1 text-center text-xs text-white">
              มีประกาศนียบัตร
						</div>
						<h4 className="mx-5 text-xs text-white">( โดยรุ่นพี่ DSI#2 ) กิจกรรมสุดพิเศษจากสาขา DSI ให้น้อง ๆ มาทำความรู้จักกับการเป็นนวัตกรในโลกยุคดิจิทัล ผ่านกิจกรรม Workshop ตั้งแต่การคิด Solution ให้ตอบโจทย์ลูกค้าสู่การทำ Prototype</h4>
					</div>
				</div>
        	<div className={outerBoxClassNameBuilder(isJava)}>
					<div>
						<Checkbox disabled={!isJava}  onChange={handleChecked2} sx={{color:'white','&.Mui-checked': {
							color: red[500]
						}}} />
						<label className="text-white">
            Easy & Fun Algorithms | 13.00 - 14.15 น. ( จำกัด 60 ที่นั่ง ) {!isJava ? "(เต็ม)" : null}
						</label>
						<h1 className="mx-5 text-white">* กิจกรรมถูกจัดเป็นภาษาอังกฤษ</h1>
						<div className="m-1 mx-5 w-24 rounded-md bg-red-500 p-1 text-center text-xs text-white">
              มีประกาศนียบัตร
						</div>
						<h4 className="mx-5 text-xs text-white">เวิร์คช็อปที่จะชวนน้อง ๆ มาร่วมสนุกกับการทำเว็บของตนเอง ด้วย CSS & HTML ซึ่งนอกจากจะได้เรียนรู้แล้ว ยังได้ผลงานติดไม้ติดมือกลับบ้านอีกด้วย !</h4>
					</div>

				</div>
				<div className={outerBoxClassNameBuilder(isWeb)}>
					<div>
						<Checkbox  disabled={!isWeb} onChange={handleChecked3} sx={{color:'white','&.Mui-checked': {
							color: red[500]
						}}} />
						<label className="text-white">
              Let&rsquo;s Explore Web Dev Journey | 14.30 - 15.45 น. ( จำกัด 60 ที่นั่ง ) {!isWeb ? "(เต็ม)" : null}
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

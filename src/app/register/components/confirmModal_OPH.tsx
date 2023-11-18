"use client";
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { StudentOpenhouseForm, registerPage } from '../model/formRegister';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import { IOpenHouseRequest } from '../../../share/types/openHouseRequest';
import LoadingButton from '@mui/lab/LoadingButton';
interface ConfirmModalProps {
	handleOnSubmit : UseFormHandleSubmit<StudentOpenhouseForm,undefined>;
	setPage : Dispatch<SetStateAction<registerPage>>;
	itCheck : boolean;
	csCheck : boolean;
	dsiCheck : boolean;
	talkCheck : boolean;
	portCheck : boolean;
}


const ConfirmModalOPH = ({handleOnSubmit,setPage,itCheck,csCheck,dsiCheck,portCheck,talkCheck} : ConfirmModalProps) => {
	const [open, setOpen] = useState(false);
	const [formRequest, setFormRequest] = useState<IOpenHouseRequest>();
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
	const [loading, setLoading] = useState(false);

	const onSubmit = (data : StudentOpenhouseForm) => {
		handleOpen();
		let ActivityField = [];
		if (dsiCheck) {
			ActivityField.push("Get to know me 'DSI'");
		}
		if (csCheck) {
			ActivityField.push("Easy & Fun java");
		}
		if (itCheck) {
			ActivityField.push("Let's Explore Web Dev Journey");
		}
		if (portCheck) {
			ActivityField.push("Portfolio");
		}
		if (talkCheck) {
			ActivityField.push("Talk With Ajarn");
		}
		const resultRequest: IOpenHouseRequest = {
			prefix: data.studentPrefix,
			firstname: data.studentName,
			lastname: data.studentSurname,
			grade: data.studentGrade,
			tel: data.studentPhoneNum,
			email: data.studentEmail,
			facebook: data.studentFacebook,
			lineId: data.StudentLine,
			schoolName: data.studentSchoolName,
			schoolAddress: data.studentSchoolAddress,
			activity: ActivityField
		};
		setFormRequest(resultRequest);
	};

	const handleOnconfirm = async () => {
		setLoading(true);
		try{
			const result = await fetch('/api/register/open-house', {
				body: JSON.stringify(formRequest),
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (result.ok) {
				setPage(registerPage.congratsOpenHouse);
			} else {
				throw new Error("Fail load");
			}
		}
		catch(err){
			setPage(registerPage.failCongrats);

		}finally {
			setLoading(false);
			handleClose();

		}


	};

	return (
		<div className="flex justify-end">
            
			<Button className="h-12 bg-primary" onClick={handleOnSubmit(onSubmit)} variant="contained">ยืนยันการลงทะเบียน</Button>
			<div >
				<Modal
					aria-describedby="modal-modal-description"
					aria-labelledby="modal-modal-title"
					className="flex items-center justify-center p-5"
					onClose={handleClose}
					open={open}
				>
					<Box sx={{backgroundColor:'#fff' , borderRadius:'15px'}}>
						<h1 className='flex justify-center p-5 text-3xl font-bold text-primary md:justify-start' >
      Confirm submition
						</h1>
						<h4 className="p-5" style={{marginTop:'10px'}}>
                กรุณาตรวจสอบความถูกต้องให้ครบถ้วนก่อนกดยืนยัน หากกดยืนยันแล้วจะไม่สามารถแก้ไขข้อมูลการสมัครได้
						</h4>
						<Box display="flex" flexDirection="row" gap="5px" height="60px" justifyContent="flex-end" margin="20px">
							<Button className='h-12 w-32 bg-red-700 text-white' onClick={handleClose} sx={	{backgroundColor:'#9c1e1e',
								'&:hover': {
									backgroundColor: '#9c1e1e',
									boxShadow: 'none'
								}}} variant='contained'>cancel</Button>
							<LoadingButton className="h-12 w-32 bg-primary text-white"
										   loading={loading}
										   loadingPosition="start" onClick={handleOnconfirm}
										   variant='contained'>{loading ? "กำลังส่งข้อมูล" : "confirm"}</LoadingButton>
						</Box>
					</Box>
				</Modal>
			</div>
		</div>
	);
};
export default ConfirmModalOPH;
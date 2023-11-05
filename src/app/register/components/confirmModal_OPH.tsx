"use client";
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { StudentOpenhouseForm, registerPage } from '../model/formRegister';
import { ISolutionChllengeRequest } from '../../../share/types/solutionChllengeRequest';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
interface ConfirmModalProps {
	handleOnSubmit : UseFormHandleSubmit<StudentOpenhouseForm,undefined>;
	setPage : Dispatch<SetStateAction<registerPage>>;
}


const ConfirmModalOPH = ({handleOnSubmit,setPage} : ConfirmModalProps) => {
	const [open, setOpen] = useState(false);
	const [formRequest, setFormRequest] = useState<StudentOpenhouseForm>();
	const handleOpen = () => {
		setOpen(true);


	};
	const handleClose = () => setOpen(false);

	const onSubmit = (data : StudentOpenhouseForm) => {
		handleOpen();
		

		//map data to request

		setFormRequest(data);
	};

	const handleOnconfirm = async() => {
		handleClose();
		console.log(formRequest);
		setPage(registerPage.congratsOpenHouse);
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
							<Button className="h-12 w-32 bg-primary text-white" onClick={handleOnconfirm} variant='contained'>confirm</Button>
						</Box>
					</Box>
				</Modal>
			</div>
		</div>
	);
};
export default ConfirmModalOPH;
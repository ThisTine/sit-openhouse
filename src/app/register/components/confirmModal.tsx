"use client";
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { ICTChallengeForm, registerPage } from '../model/formRegister';
import { ISolutionChllengeRequest } from '../../../share/types/solutionChllengeRequest';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
interface ConfirmModalProps {
	handleOnSubmit : UseFormHandleSubmit<ICTChallengeForm,undefined>;
	setPage : Dispatch<SetStateAction<registerPage>>;
}


const ConfirmModal = ({handleOnSubmit,setPage} : ConfirmModalProps) => {
	const [open, setOpen] = useState(false);
	const [formRequest, setFormRequest] = useState<ISolutionChllengeRequest>();
	const handleOpen = () => {
		setOpen(true);


	};
	const handleClose = () => setOpen(false);

	const onSubmit = (data : ICTChallengeForm) => {
		handleOpen();
		const resultRequest : ISolutionChllengeRequest = {
			teamName: data.teamName,
			schoolName: data.schoolName,
			schoolAddress: data.schoolAddress,

			firstPersonPrefix : data.prefixMember1,
			firstPersonFirstname : data.nameMember1,
			firstPersonLastname : data.surnameMember1,
			firstPersonGrade : data.gradeMember1,
			firstPersonTel : data.phoneNumMember1,
			firstPersonEmail : data.emailMember1,
			firstPersonFacebook : data.facebookMember1,
			firstPersonLineId : data.lineMember1,

			secondPersonPrefix : data.prefixMember2,
			secondPersonFirstname : data.nameMember2,
			secondPersonLastname : data.surnameMember2,
			secondPersonGrade : data.gradeMember2,
			secondPersonTel : data.phoneNumMember2,
			secondPersonEmail : data.emailMember2,
			secondPersonFacebook : data.facebookMember2,
			secondPersonLineId : data.lineMember2,

			thirdPersonPrefix : data.prefixMember3,
			thirdPersonFirstname : data.nameMember3,
			thirdPersonLastname : data.surnameMember3,
			thirdPersonGrade : data.gradeMember3,
			thirdPersonTel : data.phoneNumMember3,
			thirdPersonEmail : data.emailMember3,
			thirdPersonFacebook : data.facebookMember3,
			thirdPersonLineId : data.lineMember3,
			
			advisorPersonPrefix : data.ajarnPrefix,
			advisorPersonFirstname : data.ajarnName,
			advisorPersonLastname : data.ajarnSurname,
			advisorPersonTel : data.ajarnphoneNum,
			advisorPersonEmail : data.ajarnEmail,
			advisorPosition : data.ajarnPosition

		};

		setFormRequest(resultRequest);
	};

	const handleOnconfirm = async() => {
		handleClose();
		const result = await fetch("/api/register/solution-challenge", {
			body: JSON.stringify(formRequest),
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		});
		if(result.status === 200){
			setPage(registerPage.congratsIct);
		}
		else{
			setPage(registerPage.failCongrats);
		}
		
	};

	
	const [isSuccess, setIsSuccess] = useState(false);
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
							<Button className='h-12 w-32 bg-red-700 text-white' onClick={handleClose} sx={{'&:hover': {
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
export default ConfirmModal;
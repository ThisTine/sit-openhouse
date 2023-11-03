"use client";
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';

const ConfirmModal = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div className="flex justify-end">
			<Button className="h-12 w-32 bg-primary" onClick={handleOpen} variant="contained">ส่งข้อมูล</Button>
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
							<Button className="h-12 w-32 bg-primary text-white" variant='contained'>confirm</Button>
							<Button className='h-12 w-32 bg-red-700 text-white' sx={{'&:hover': {
								backgroundColor: '#9c1e1e',
								boxShadow: 'none'
							}}} variant='contained'>cancel</Button>
						</Box>
					</Box>
				</Modal>
			</div>
		</div>
	);
};
export default ConfirmModal;
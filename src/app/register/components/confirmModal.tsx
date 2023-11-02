"use client";
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';

const ConfirmModal = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div className="flex justify-end">
			<Button className="h-12 w-32 bg-primary" onSubmit={handleOpen} variant="contained">ส่งข้อมูล</Button>
			<Modal
				aria-describedby="modal-modal-description"
				aria-labelledby="modal-modal-title"
				onClose={handleClose}
				open={open}
			>
				<Box sx={{backgroundColor:'#fff' , borderRadius:'15px'}}>
					<h3  id="modal-modal-title" >
      Confirm submition
					</h3>
					<h4 id="modal-modal-description" style={{marginTop:'20px'}}>
                กรุณาตรวจสอบความถูกต้องให้ครบถ้วนก่อนกดยืนยัน หากกดยืนยันแล้วจะไม่สามารถแก้ไขข้อมูลการสมัครได้
					</h4>
					<Box display="flex" flexDirection="row">
						<Button className="h-12 w-32 bg-primary">confirm</Button>
						<Button className='h-12 w-32 bg-red-800'>cancel</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};
export default ConfirmModal;
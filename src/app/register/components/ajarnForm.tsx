import { Control, Controller, FieldErrors } from "react-hook-form";
import { ICTChallengeForm, Iprefix, Igrade } from "../model/formRegister";
import { Select, MenuItem, TextField } from "@mui/material";
import React from "react";

export interface AjarnIctFormProps {
	formControl: Control<ICTChallengeForm, any>
	formErrors: FieldErrors<ICTChallengeForm>
	prefix: Iprefix[]
}

const AjarnIctForm = ({ formControl, formErrors, prefix }: AjarnIctFormProps) => {
	return (
		<div>
			<h2 className="my-10 text-3xl text-primary">อาจารย์ที่ปรึกษาทีม</h2>
			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-7 py-5  md:col-span-1">
					<h2 className="text-gray-4">คำนำหน้า *</h2>
					<Controller control={formControl} name="ajarnPrefix" render={({ field: { onChange, ...rest } }) => (
						<div>
							<Select
								fullWidth
								size="medium"
								{...rest}
								className="rounded-lg bg-white"
								error={!!formErrors.ajarnPrefix}
								onChange={(e, data) => {
									onChange(e, data);
								}}
							>
								{prefix.map((item) => (
									<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
								))}
							</Select>
							<div className="text-red-500">{formErrors.ajarnPrefix?.message}</div>
						</div>
					)} />
				</div>

				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnName"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อจริง *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnName}
								/>
								<div className="text-red-600">{formErrors.ajarnName?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnSurname"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">นามสกุล *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnSurname}
								/>
								<div className="text-red-600">{formErrors.ajarnSurname?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnphoneNum"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">เบอร์โทร *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnphoneNum}
								/>
								<div className="text-red-600">{formErrors.ajarnphoneNum?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-6 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="ajarnEmail"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">Email *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnEmail}
								/>
								<div className="text-red-600">{formErrors.ajarnEmail?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>
			<Controller
				control={formControl}
				name="ajarnPosition"
				render={({ field }) => (
					<div>
						<h2 className="text-gray-4">กลุ่มสาระการเรียนรู้ที่สังกัด หรือตําแหน่งปัจจุบัน *</h2>
						<div className="grid grid-cols-6 gap-4">
							<div className="col-span-6 md:col-span-4">
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.ajarnPosition}
								/>
							</div>
						</div>
						<div className="text-red-600">{formErrors.ajarnPosition?.message}</div>
					</div>
				)}
			/>
		</div>
	);
};

export default AjarnIctForm;

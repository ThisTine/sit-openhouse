import { Select, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { IteamMemberFormProps } from "./teamMemberForm";
import React from "react";

const IctMember3Form = ({ grade, prefix, formControl, formErrors }: IteamMemberFormProps) => {
	return (
		<div>
			<div className="my-3">
				<div className="flex gap-4">
					<div className="rounded-lg bg-primary p-2 text-white opacity-100">คนที่ 3</div>
				</div>
			</div>
			<h2 className="text-xl text-primary">ข้อมูลส่วนตัว</h2>


			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-7 py-5 md:col-span-1">
					<h2 className="text-gray-4">คำนำหน้า*</h2>
					<Controller control={formControl} name="prefixMember3" render={({ field: { onChange, ...rest } }) => (
						<div>
							<Select
								fullWidth
								size="medium"
								{...rest}
								className="rounded-lg bg-white"
								error={!!formErrors.prefixMember3}
								onChange={(e, data) => {
									onChange(e, data);
								}}
							>
								{prefix.map((item) => (
									<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
								))}
							</Select>
							<div className="text-red-500">{formErrors.prefixMember3?.message}</div>
						</div>
					)} />
				</div>

				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="nameMember3"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อจริง *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.nameMember3}
								/>
								<div className="text-red-600">{formErrors.nameMember3?.message}</div>
							</div>
						)}
					/>
				</div>
				<div className="col-span-7 py-5 md:col-span-3">
					<Controller
						control={formControl}
						name="surnameMember3"
						render={({ field }) => (
							<div>
								<h2 className="text-gray-4">ชื่อนามสกุล *</h2>
								<TextField
									fullWidth
									size="medium"
									{...field}
									className="rounded-lg bg-white"
									error={!!formErrors.surnameMember3}
								/>
								<div className="text-red-600">{formErrors.surnameMember3?.message}</div>
							</div>
						)}
					/>
				</div>
			</div>

			<div className="py-5">
				<h2 className="text-gray-4">ระดับชั้นที่กำลังศึกษาอยู่*</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 md:col-span-2">
						<Controller control={formControl} name="gradeMember3" render={({ field: { onChange, ...rest } }) => (
							<div>
								<Select
									fullWidth
									size="medium"
									{...rest}
									className="rounded-lg bg-white"
									error={!!formErrors.gradeMember3}
									onChange={(e, data) => {
										onChange(e, data);
									}}
								>
									{grade.map((item) => (
										<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
									))}
								</Select>
								<div className="text-red-500">{formErrors.gradeMember3?.message}</div>
							</div>
						)} />
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-xl text-primary">ช่องทางการติดต่อ</h2>
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={formControl}
							name="phoneNumMember3"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">เบอร์โทรศัพท์ *</h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
										error={!!formErrors.phoneNumMember3}
									/>
									<div className="text-red-600">{formErrors.phoneNumMember3?.message}</div>
								</div>
							)}
						/>
					</div>
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={formControl}
							name="emailMember3"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">Email *</h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
										error={!!formErrors.emailMember3}
									/>
									<div className="text-red-600">{formErrors.emailMember3?.message}</div>
								</div>
							)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={formControl}
							name="facebookMember3"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">Facebook (ไม่บังคับ) </h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
									/>
								</div>
							)}
						/>
					</div>
					<div className="col-span-6 py-5 md:col-span-3">
						<Controller
							control={formControl}
							name="lineMember3"
							render={({ field }) => (
								<div>
									<h2 className="text-gray-4">Line ID (ไม่บังคับ) </h2>
									<TextField
										fullWidth
										size="medium"
										{...field}
										className="rounded-lg bg-white"
									/>
								</div>
							)}
						/>
					</div>
				</div>
			</div>
		</div>

	);
};

export default IctMember3Form;

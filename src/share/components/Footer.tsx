/* eslint-disable react/jsx-max-depth */
import React from 'react';
import sit_logo from 'public/logo/sit_logo_bl.png';
import Image from "next/image";
import Location from '@/share/icon/Location';
import Mail from '@/share/icon/Mail';
import Facebook from '@/share/icon/Facebook';
import Phone from '@/share/icon/Phone';
import Line from '@/share/icon/line.svg';

const Footer = () => {
	return (
		<div className="w-full bg-[#3E6493] py-16">
			<div className="flex w-full justify-center pb-5">
				<div className="grid w-[80%] grid-cols-3 gap-6 border-b-2 border-inherit pb-10">
					<div>
						<Image alt="sit logo" className="pb-5" src={sit_logo}/>
						<div className="flex gap-2 text-gray-200">
							<Location/>
							<h1>126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140.</h1>
						</div>
					</div>
					<div className="col-span-2 text-gray-200">
						<div className="grid grid-cols-3 gap-4 px-32">
							<div className="col-span-3">
								<h1 className="text-2xl font-bold">Contact</h1>
							</div>
							<div>
								<div className="mb-6 flex place-items-center gap-2 text-gray-200">
									<Mail />
									<p>Info@sit.ac.th</p>
								</div>
								<h1 className="text-2xl font-bold">Open House</h1>
								<div className="my-2 flex place-items-center gap-2 text-gray-200">
									<Phone />
									<p>063-4469879 (พี่สก็อต)</p>
								</div>
							</div>
							<div>
								<div className="mb-6 flex place-items-center gap-2 text-gray-200">
									<Facebook/>
									<p>SIT.Family</p>
								</div>
								<h1 className="text-2xl font-bold">ICT</h1>
								<div className="my-2 flex place-items-center gap-2 text-gray-200">
									<Phone />
									<p>02-470-9882 (พี่รุ่ง)</p>
								</div>
							</div>
							<div>
								<div className="mb-6 flex place-items-center gap-2 text-gray-200">
									<Image alt='line logo' src={Line}  />
									<p>@SIT KMUTT</p>
								</div>
								<h1 className="text-2xl font-bold">D-Day</h1>
								<div className="my-2 flex place-items-center gap-2 text-gray-200">
									<Phone />
									<p>02-470-9832 (พี่นิคกี้)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center text-gray-200 ">
				<h1 className="pt-2">© 2018 School of Information Technology, King Mongkut&apos;s University of Technology Thonburi.</h1>
			</div>
		</div>
	);
};

export default Footer;
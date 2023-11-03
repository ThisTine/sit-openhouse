/* eslint-disable react/jsx-max-depth */
import React from 'react';
import sit_logo from 'public/logo/sit_logo_bl.png';
import Image from "next/image";
import Location from '@/share/icon/Location';
import Mail from '@/share/icon/Mail.svg';
import Facebook from '@/share/icon/Facebook.svg';
import Phone from '@/share/icon/Phone.svg';
import Line from '@/share/icon/line.svg';

const Footer = () => {
	return (
		<div className="w-full bg-[#3F6593] py-16">
			<div className="flex w-full justify-center pb-5 max-lg:hidden">
				<div className="grid w-[80%] grid-cols-3 gap-6 border-b-2 border-inherit pb-10">
					<div>
						<Image alt="sit logo" className="pb-5" src={sit_logo}/>
						<div className="flex gap-2 text-gray-200">
							<Location/>
							<h1>126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140.</h1>
						</div>
					</div>
					<div className="col-span-2 text-gray-200">
						<div className="grid grid-cols-3 px-0 xl:px-16 2xl:gap-8 2xl:px-32">
							<div className="col-span-3">
								<h1 className="text-2xl font-bold">Contact</h1>
							</div>
							<div>
								<div className="mb-6 flex place-items-center gap-2 text-gray-200">
									<Image alt='mail logo' src={Mail} />
									<p>Info@sit.ac.th</p>
								</div>
								<h1 className="text-2xl font-bold">Open House</h1>
								<div className="my-2 flex place-items-center gap-2 text-gray-200">
									<Image alt='Phone logo' src={Phone} />
									<p>063-4469879 (พี่สก็อต)</p>
								</div>
							</div>
							<div>
								<div className="mb-6 flex place-items-center gap-2 text-gray-200">
									<Image alt='facebook logo' src={Facebook} />
									<p>SIT.Family</p>
								</div>
								<h1 className="text-2xl font-bold">ICT</h1>
								<div className="my-2 flex place-items-center gap-2 text-gray-200">
									<Image alt='Phone logo' src={Phone} />
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
									<Image alt='Phone logo' src={Phone} />
									<p>02-470-9832 (พี่นิคกี้)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-[100%] justify-center lg:hidden">
				<div className="mx-16 grid grid-cols-2 gap-2 border-b-2 border-inherit pb-6 max-sm:mx-6">
					<div className="col-span-2 pb-2 text-center text-3xl font-bold text-gray-200">
						<h1>Contect</h1>
					</div>
					<div>
						<h1 className="text-base font-bold text-gray-200">Open House@SIT</h1>
						<div className="my-2 flex gap-2 text-gray-200">
							<Image alt='Phone logo' src={Phone} />
							<div>
								<p>063-4469879</p>
								<p>(พี่สก็อต)</p>
							</div>
						</div>
					</div>
					<div>
						<h1 className="text-base font-bold text-gray-200">ICT@SIT</h1>
						<div className="my-2 flex gap-2 text-gray-200">
							<Image alt='Phone logo' src={Phone} />
							<div>
								<p>02-470-9882</p>
								<p>(พี่รุ่ง)</p>
							</div>
						</div>
					</div>
					<div>
						<h1 className="text-base font-bold text-gray-200">D-Day@SIT</h1>
						<div className="my-2 flex gap-2 text-gray-200">
							<Image alt='Phone logo' src={Phone} />
							<div>
								<p>02-470-9832</p>
								<p>(พี่นิคกี้)</p>
							</div>
						</div>
					</div>
					<div className="font-bold text-gray-200">
						<h1>126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140.</h1>
					</div>
					<div className="col-span-2 flex justify-center gap-8 pt-4">
						<Image alt='facebook logo' className="w-[35px]" src={Facebook}/>
						<Image alt='mail logo' className="w-[35px]" src={Mail} />
						<Image alt='line logo' className="w-[35px]" src={Line} />
					</div>
				</div>
			</div>
			<div className="flex justify-center px-16 text-center text-gray-200 lg:px-0">
				<h1 className="pt-2">© 2018 School of Information Technology, King Mongkut&apos;s University of Technology Thonburi.</h1>
			</div>
		</div>
	);
};

export default Footer;
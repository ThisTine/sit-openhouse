'use client';
import React, { useState } from 'react';
import Logo from 'public/logo/sit_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from '@/share/icon/hamburger.svg';
import exit from '@/share/icon/x.svg';

const NavBar = () => {
	const path = usePathname();
	const [isOpen, setIsOpen] = useState(false); 

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div className='fixed top-0 z-10 flex w-full items-center bg-gradient-to-b from-[rgba(0,0,0,0.8)] max-sm:hidden'>
				<div className='min-xl:pl-10 m-5 xl:pl-24'>
					<Image alt="KMUTTWITSIT" height="60" src={Logo} width="192"/>
				</div>
				<div className="flex w-4/6 justify-center gap-16 text-xl text-white">
					<Link href="/">
						<p className={path == "/" ? 'font-bold': 'opacity-70'} >หน้าหลัก</p>
					</Link>
					<Link href="/agenda">
						<p className={path == "/agenda" ? 'font-bold': 'opacity-70'} >กำหนดการ</p>
					</Link>
					<Link href="/info">
						<p className={path == "/info" ? 'font-bold': 'opacity-70'} >ข้อมูลเพิ่มเติม</p>
					</Link>
				</div>
			</div>
			<div className='fixed top-0 z-10 flex w-full items-center justify-between bg-gradient-to-b from-[rgba(0,0,0,0.8)] pl-8 sm:hidden'>
				<div onClick={handleClick}>
					<Image alt="Hamburger" className={`pt-3 ${isOpen? 'hidden' : ''}`} src={Hamburger} />
				</div>
				<div className='m-5'>
					<Image alt="KMUTTWITSIT" height="60" src={Logo} width="192"/>
				</div>
			</div> 
			<div className={isOpen ? 'visible fixed z-10 w-full translate-y-0 bg-[#3399CC] opacity-100 transition-all duration-500 ease-in-out' : 'invisible fixed z-10 w-full -translate-y-full opacity-0 transition-all duration-500 ease-in-out'}>				
				<div className="pl-7 pt-5" onClick={handleClick}>
					<Image alt="exit" className='pt-3' onClick={handleClick} src={exit} />
					<div className='mt-5 flex flex-col gap-5 pb-5 pl-1 text-white'>
						<Link href="/">
							<p className={path == "/" ? 'font-bold': 'opacity-70'} >หน้าหลัก</p>
						</Link>
						<Link href="/agenda">
							<p className={path == "/agenda" ? 'font-bold': 'opacity-70'} >กำหนดงาน</p>
						</Link>
						<Link href="/info">
							<p className={path == "/info" ? 'font-bold': 'opacity-70'} >ข้อมูลเพิ่มเติม</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
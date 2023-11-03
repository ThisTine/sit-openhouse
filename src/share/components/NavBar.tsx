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
			<div className='fixed top-0 z-10 flex w-full items-center max-md:hidden'>
				<div className='min-xl:pl-10 m-5 xl:pl-20'>
					<Image alt="KMUTTWITSIT" height="60" src={Logo} width="192"/>
				</div>
				<div className="min-xl:text-lg flex w-4/6 justify-center gap-20 text-white xl:text-xl">
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
			<div className='fixed top-0 z-10 flex w-full items-center justify-between pl-8 md:hidden'>
				<div onClick={handleClick}>
					<Image alt="Hamburger" className={`pt-3 ${isOpen? 'hidden' : ''}`} src={Hamburger} />
				</div>
				<div className='m-5'>
					<Image alt="KMUTTWITSIT" height="60" src={Logo} width="192"/>
				</div>
			</div> 
			<div className={isOpen ? 'fixed z-10 w-full translate-y-0 bg-[#3399CC] transition-transform duration-500 ease-in-out' : 'h-0 -translate-y-full transition-transform duration-500 ease-in-out'}>				
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
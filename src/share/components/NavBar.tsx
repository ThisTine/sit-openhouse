"use client";
import React from "react";
import Logo from "public/logo/sit_logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  return (
    <div>
      <div className="fixed top-0 z-10 flex w-full items-center max-md:hidden">
        <div className="m-5 pl-20">
          <Image alt="KMUTTWITSIT" height="60" src={Logo} width="192" />
        </div>
        <div className="flex w-2/4 justify-center gap-20">
          <Link href="/">
            <p className={path == "/" ? "font-bold text-white" : ""}>
              หน้าหลัก
            </p>
          </Link>
          <Link href="/agenda">
            <p className={path == "/agenda" ? "font-bold text-white" : ""}>
              กำหนดงาน
            </p>
          </Link>
          <Link href="/info">
            <p className={path == "/info" ? "font-bold text-white" : ""}>
              ข้อมูลเพิ่มเติม
            </p>
          </Link>
        </div>
      </div>
      <div className="fixed top-0 z-10 flex w-full items-center justify-center md:hidden">
        <div className="m-5">
          <Image alt="KMUTTWITSIT" height="60" src={Logo} width="192" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

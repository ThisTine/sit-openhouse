import Link from "next/link";
import React, { useMemo } from "react";

interface ButtonProps {
	children: React.ReactNode;
	disabled: boolean;
	onClick: () => void;
	href?: string;
	isLoading?: boolean
}

const Button = ({ children, disabled, onClick, href , isLoading}: ButtonProps) => {
	const btnClassname = useMemo(() => `rounded-md whitespace-nowrap flex justify-center bg-[#228BE6] px-4 md:px-24 py-3 text-2xl text-white duration-300 hover:bg-blue-600 max-md:w-full md:w-fit 
	${disabled ? 'cursor-not-allowed bg-gray-600 hover:bg-gray-700' : ''}`, [disabled]);
	return (
		<div className="justify-center max-md:flex ">
			{href ? <Link className={btnClassname}
				href={href}
			>
				{children}
			</Link> : <button className={btnClassname}
				disabled={disabled || isLoading}
				onClick={onClick}
				type="button"
			>{ isLoading ? "กำลังส่งข้อมูล" : children}</button>}
		</div>
	);
};

export default Button;
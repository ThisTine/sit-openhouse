import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    disabled: boolean;
    link? : string;
}

const Button = ({ children, disabled, link = "/" }: ButtonProps) => {
	return (
		<div className="justify-center max-md:flex">
			<Link href={link}>
				<button className={`rounded-md bg-[#228BE6] px-4 py-3 text-2xl text-white duration-300 hover:bg-blue-600 max-md:w-full md:w-4/12 
            ${disabled ? 'cursor-not-allowed bg-gray-600 hover:bg-gray-700' : ''}`}
				disabled={disabled}
				type="button"
				>
					{children}
				</button>
			</Link>
		</div>
	);
};

export default Button;
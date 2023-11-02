import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<div className="justify-center max-md:flex">
			<button
				className="w-4/12 rounded-md bg-[#228BE6] px-4 py-3 text-2xl text-white duration-300 hover:bg-blue-600 max-md:hidden"
				onClick={onClick}
				type="button"
			>
				{children}
			</button>
			<button className="text-2xl font-bold md:hidden" type="button">
				<h1>ลงทะเบียนเลย!</h1>
			</button>
		</div>
	);
};

export default Button;
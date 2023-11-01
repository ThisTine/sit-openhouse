import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button
			className="w-4/12 rounded-md bg-[#228BE6] px-4 py-3 text-2xl text-white duration-300 hover:bg-blue-600"
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	);
};

export default Button;
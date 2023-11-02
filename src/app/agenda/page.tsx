"use client";
import React, { useState, useEffect } from "react";
import RenderDesktop from "./components/RenderDesktop";
import RenderMobile from "./components/RenderMobile";

const AgendaPage = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);
	const lang = "th";
	const [filter, setFilter] = useState(0);
	const handleFilterSelect = (filter: number) => {
		setFilter(filter);
	};
	const [render, setRender] = useState(
		<div className="flex h-screen w-screen flex-row justify-center bg-[#34312F] pt-20 text-white">
			<div className="flex p-5 pt-10">
				<h1 className="text-2xl font-bold text-[#3399CC]">
					Loading . . .
				</h1>
			</div>
		</div>
	);
	useEffect(() => {
		if (isMobile) {
			setRender(
				<RenderMobile
					filter={filter}
					handleFilterSelect={handleFilterSelect}
					lang={lang}
				/>
			);
		} else {
			setRender(
				<RenderDesktop
					filter={filter}
					handleFilterSelect={handleFilterSelect}
					lang={lang}
				/>
			);
		}
	}, [filter, isMobile]);
	return render;
};

export default AgendaPage;

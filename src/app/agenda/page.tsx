"use client";
import React, { useState } from "react";
import RenderDesktop from "./components/RenderDesktop";

const AgendaPage = () => {
	const isMobile = false;
	const lang = "th";
	const [filter, setFilter] = useState(0);
	const handleFilterSelect = (filter: number) => {
		setFilter(filter);
	};

	const renderMobile = () => {
		return <div>MobileAgendaPage</div>;
	};

	return isMobile ? (
		renderMobile()
	) : (
		<RenderDesktop {...{ lang, filter, handleFilterSelect }} />
	);
};

export default AgendaPage;

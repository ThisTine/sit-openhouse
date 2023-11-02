import React, { useState } from 'react';
import { th, en } from './text';

const AgendaPage = () => {
	const isMobile = false;
	const lang = 'th';
	const [filter, setFilter] = useState(0);
	const handleFilterSelect = (filter: number) => {
		setFilter(filter);
	};
	const renderAllAgenda = () => {
		return (
			<div>AllAgenda</div>
		);
	};

	const renderMobile = () => {
		return (
			<div>MobileAgendaPage</div>
		);
	};
	const renderDesktop = () => {
		return (
			//Screen div
			<div className='h-screen w-screen bg-[#495057]'>
				{/* AgendaText */}
				<div className='flex items-center justify-center p-5 pt-10'>
					<h1 className='text-5xl font-bold text-[#3399CC]'>{ lang === 'th' ? th.agenda : en.agenda }</h1>
				</div>
				{/* Selector */}
				<div className='flex flex-row justify-center space-x-4'>
					<div className={'rounded p-1 pl-2 pr-2 text-white ' + (filter === 0 ? 'bg-[#F03D3E]' : '') + ' cursor-pointer'}
						onClick={() => handleFilterSelect(0)}>
						{lang === 'th' ? th.all : en.all}
					</div>
					<div className={'rounded p-1 pl-2 pr-2 text-white ' + (filter === 1 ? 'bg-[#F03D3E]' : '') + ' cursor-pointer'}
						onClick={() => handleFilterSelect(1)}>
						Open House
					</div>
					<div className={'rounded p-1 pl-2 pr-2 text-white ' + (filter === 2 ? 'bg-[#F03D3E]' : '') + ' cursor-pointer'}
						onClick={() => handleFilterSelect(2)}>
						ICT Challenge
					</div>
					<div className={'rounded p-1 pl-2 pr-2 text-white ' + (filter === 3 ? 'bg-[#F03D3E]' : '') + ' cursor-pointer'}
						onClick={() => handleFilterSelect(3)}>
						CS D-Day
					</div>
				</div>
				{/* Agenda */}
				<div className='flex flex-col items-center justify-center p-5 pt-10'>
					{filter === 0 ? renderAllAgenda() : filter === 1 ? 'OpenHouse' : filter === 2 ? 'ICTChallenge' : 'CSD-Day'}
				</div>
			</div>
		);
	};
	return isMobile ? renderMobile() : renderDesktop();
};

export default AgendaPage;
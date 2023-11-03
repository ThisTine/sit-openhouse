const schedule = [
	{
		time: '10.00', title: 'OPEN HOUSE'
	},
	{
		time: '10.00', title: 'ICT CHALLENGE'
	},
	{
		time: '10.00', title: 'CS PROJECT D-DAY EXHIBITION', phone: 'D-DAY'
	}
];

export function HomeView() {
	return (
		<div className='h-screen w-full bg-[#34312F]'>
			<div className='flex h-full flex-col justify-center md:pl-20 md:pt-24 lg:pl-20'>
				<div className='flex flex-col gap-2 max-md:hidden'>
					<div className='text-white max-xl:text-4xl md:text-5xl xl:text-6xl'>กลับมาอีกครั้ง กับ 3 อีเว้นท์แห่งปี</div>
					<div className='text-white max-xl:text-4xl md:text-5xl xl:text-6xl'>จากคณะเทคโนโลยีสารสนเทศ</div>
					<div className='text-white max-xl:text-4xl md:text-5xl xl:text-6xl'>ที่ทุกคนรอคอย</div>
					<div className='mt-20 gap-32 text-6xl text-[#3399CC]'>
						{
							schedule.map((item, index) => {
								return (
									<div className='mb-16 flex gap-20' key={index}>
										<div className='md:text-5xl xl:text-6xl'>{item.time}</div>
										<div className='md:w-3/5 md:text-5xl xl:w-2/5 xl:text-6xl'>{item.title}</div>
									</div>
								);
							}
							)
						}
					</div>
				</div>
				<div className='md:hidden'>
					<div className='p-5 text-2xl font-bold text-white'>
                    กลับมาอีกครั้ง กับ 3 อีเว้นท์แห่งปีจากคณะเทคโนโลยีสารสนเทศที่ทุกคนรอคอย
					</div>
					{
						schedule.map((item, index) => {
							return (
								<div className='flex pb-2 pl-5 text-[#3399CC]' key={index}>
									<div className='text-3xl font-bold'>{index == schedule.length - 1? item.phone: item.title}</div>
								</div>
							);
						}
						)
					}
				</div>
			</div>
		</div>
	);
}
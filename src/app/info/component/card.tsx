import Image from "next/image";

export default function Card() {
	return (
				
		
		<div className="flex w-full max-w-screen-lg flex-row gap-5 px-5 max-md:flex-col">
			<div className="relative w-full flex-1  md:w-1/2">
				<img
					alt="location"
					className="h-full w-full rounded-lg" // Use 'rounded-lg' for rounded corners
				
					src='/image21.png'
					
				/>
			</div>
			<div className="relative w-full flex-1 font-semibold after:absolute after:left-2 after:top-2  after:z-[0] after:flex after:h-full after:w-full after:rounded-[10px] after:bg-sky-500 md:w-1/2">
				<div className="relative z-[1] flex h-full  w-full flex-col justify-center rounded-[10px] bg-zinc-300 p-5">
					<h1 className="p-1 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      สถานที่ LOCATION
					</h1>
					<h1 className="p-1 text-lg text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
					</h1>
					<h4 className="p-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-base">
      126 Pracha Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140
					</h4>
					<a className="w-fit rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl" href="https://maps.app.goo.gl/ksXL6Jr2Xf9m4opx6" rel="noreferrer" target="_blank">
      เปิด Google Map
					</a>
				</div>
				
			</div>

		</div>

		
	);
}

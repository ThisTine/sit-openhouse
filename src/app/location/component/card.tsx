import Image from 'next/image';
import Imgassets from '../assest/image21.png';

export default function Card() {
	return (
				
		
		<div className="flex w-3/4 flex-row gap-5 px-5 max-md:flex-col">
			<div className="w-full  md:w-1/2">
				<img
					alt="location"
					className="h-full w-full rounded-lg" // Use 'rounded-lg' for rounded corners
				
					src='/image21.png'
					
				/>
			</div>
			<div className="relative w-full font-semibold md:w-1/2">
				<div className="relative flex h-full  w-full flex-col justify-center rounded-[10px] bg-zinc-300 p-5">
					<h1 className="p-1 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      สถานที่ LOCATION
					</h1>
					<h1 className="p-1 text-lg text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
					</h1>
					<h4 className="p-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-base">
      126 Pracha Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140
					</h4>
					<div className="hover-bg-blue-700 rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      เปืด Google Map
					</div>
				</div>
				
			</div>

		</div>

		
	);
}
{/* <div className="flex flex-row items-center justify-center gap-4 max-md:flex-col">
			<div className=" flex-initial ">
				<div className='container h-[21.38vw] w-[32.64vw] max-md:h-[35vw] max-md:w-[50vw]' >

					<Image
						alt="location"
						className=" rounded-lg" // Use 'rounded-lg' for rounded corners
				
						layout="responsive" // Set the layout to 'responsive' for responsiveness
						src={Imgassets}
					

					/>	
				</div>
			</div>

			<div className="relative flex-initial max-sm:pt-10">
				<div className="relative">
					<div className=" z-10 flex h-[21.38vw] w-[37.64vw] flex-col items-start justify-center rounded-[10px] bg-zinc-300 p-5 max-md:h-[35vw] max-md:w-[50vw] max-sm:h-[70vw]  max-sm:w-[70vw]">
						<div className='flex-initial'>
							<h1 className="p-1 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          สถานที่ LOCATION
							</h1>
						</div>
						<div className='flex-initial'>
							<h1 className="p-1 text-lg text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
							</h1>
						</div>
						<div className='flex-initial'>
							<h4 className="p-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          126 Pracha Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140
							</h4>
						</div>
						<div className='flex-initial'>
							<div className="hover-bg-blue-700 rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          เปืด Google Map
							</div>
						</div>
					</div>
					<div className="z-0 h-[21.38vw] w-[37.64vw] translate-x-2 translate-y-2 rounded-[10px] bg-sky-500 max-md:h-[35vw] max-md:w-[50vw]" />
				</div>
			</div>


		</div> */}
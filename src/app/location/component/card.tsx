import Image from 'next/image';
import Imgassets from '../assest/image21.png';

export default function Card() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-5 sm:flex-row">
			<div className="flex-initial">
				<Image alt="location" className="rounded-[10px]" height={339} src={Imgassets} width={503} />
			</div>
			<div className="relative flex-initial p-5">
				<div className="relative">
					<div className="absolute z-10 flex h-[339px] w-[503px] flex-col items-start justify-center rounded-[10px] bg-zinc-300 p-5">
						<h1 className="p-1 text-xl">สถานที่ LOCATION</h1>
						<h1 className="p-1 text-3xl text-primary">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</h1>
						<h4 className="p-1">126 Pracha Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140</h4>
						<div className="hover-bg-blue-700 rounded bg-blue-500 px-4 py-2 font-bold text-white">
              เปืด Google Map
						</div>
					</div>
					<div className="z-0 h-[339px] w-[503px] translate-x-2 translate-y-2 rounded-[10px] bg-sky-500" />
				</div>
			</div>
		</div>
	);
}

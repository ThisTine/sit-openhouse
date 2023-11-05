"use client";
import { FC, ReactNode, useState } from "react";
import Bus from "./Bus";
import MiniBus from "./MiniBus";
import Mrt from "./Mrt";
import Car from "./Car";

const locationMapper = {
	bus:"รถโดยสารประจำทาง",
	miniBus:"รถโดยสารขนาดเล็ก",
	mrt:"รถไฟฟ้า",
	car:"รถยนต์ส่วนตัว"
};
type IKeyOfLocation = keyof typeof locationMapper
const keyOfLocation = Object.keys(locationMapper);
const WayBth:FC<{children:ReactNode, enable: boolean, onClick:()=>void}> = ({children,enable,onClick})=>{
	return <button className={`w-full py-5 text-center font-bold transition-all ${enable ? "rounded-[10px] rounded-b-[0px] bg-zinc-300 text-primary" : "text-white"} `} onClick={onClick} type="button">{children}</button>;
};
export default function Way() {
	const [defaultMode,setDefaultMode] = useState<IKeyOfLocation>("bus");

	return (											
		<div className="relative w-full max-w-screen-lg after:absolute after:left-2  after:top-2 after:z-[0] after:flex after:h-full after:w-full after:rounded-[10px] after:bg-sky-500">	
													
			<div className="relative z-10 flex h-auto w-auto flex-col items-start justify-center overflow-hidden rounded-[10px] bg-zinc-300 "  >
				<div className="flex w-full justify-between bg-[#919191]">
					{keyOfLocation.map(i=><WayBth enable={defaultMode === i} key={i} onClick={()=>{setDefaultMode(i as IKeyOfLocation);}} >{locationMapper[i as IKeyOfLocation]}</WayBth>)}

				</div>	
				<div className="p-5 ">
					{defaultMode === "bus" ? <Bus/> : null}
					{defaultMode === 'miniBus' ? <MiniBus/> : null}
					{defaultMode === 'mrt' ? <Mrt/> : null}
					{defaultMode === 'car' ? <Car/> : null}
				</div>
			</div>
																		
			{/* <div className=" h-[400px] w-[800px] translate-x-3 translate-y-14 rounded-[10px] bg-sky-500" /> */}
		</div>
	
		
	);
};
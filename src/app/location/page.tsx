import assetsImg from 'src/app/location/assest/image21.png';
import Image from 'next/image';
import Imgassets from './assest/image21.png';
import Card from './component/card';
import Way from './component/way';

const locationPage = () => {
	return (
		<div>
			<div className='h-screen w-screen  bg-[url("/background.png")] bg-cover bg-fixed '>
				<div className='h-screen  w-screen bg-gradient-to-b from-black/70 to-gray-600/50' >

					<div className='flex flex-col items-center justify-center p-8 md:p-10 lg:p-12' >
						<h1 className='p-10 text-3xl text-primary md:text-4xl lg:text-6xl'>ข้อมูลเพิ่มเติม</h1>
						
					</div>
					<div className='flex flex-col'>
						<Card/>
					
					</div>
		

				</div>
				
			</div>
			<div className='h-screen w-screen  bg-[url("/background.png")] bg-cover bg-fixed '>
				<div className='h-screen  w-screen bg-gradient-to-b from-gray-600/50 to-gray-600/50' >

					<div className='flex h-screen flex-col items-center justify-center'>
						<Way/>
					</div>
	

				</div>
			
			</div>
		</div>

	);
};

export default locationPage;
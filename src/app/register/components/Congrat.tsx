import Image from 'next/image';
import React from 'react';

const CongratICT = () => {
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(/assets/bgcongrateICT.png)` }}>
		
			<div className='flex justify-center align-middle'><Image alt="congratulation" height={150} src="/assets/ICT.png" width={600} /></div>
			
		</div>
	);
};

export default CongratICT;
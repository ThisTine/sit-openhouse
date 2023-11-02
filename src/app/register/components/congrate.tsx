import Image from 'next/image';
import React from 'react';

const congrateICT = () => {
	return (
		<div className='h-screen bg-no-repeat p-10' style={{ backgroundImage: `url(/assets/bgcongrateICT.png)` }}>
			<div><Image alt="congratulation" height={150} src="/assets/ICT.png" width={600} /></div>
		</div>
	);
};

export default congrateICT;
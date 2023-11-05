import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';

const Accordions = ({ title, content }) => {
	return (
		<Accordion
			
			elevation={0}
			sx={{
				color: 'white',
				backgroundColor: 'transparent',
				borderBottom: 1,
				p: 2
			}}
		>
			<AccordionSummary
				aria-controls="panel1a-content"
				expandIcon={<ExpandMoreOutlined className='text-white'/>}
				id="panel1a-header"
			>	
				<div className='flex w-full justify-between'>
					<div className='text-2xl'>{title}</div>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{content}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

Accordions.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

export default Accordions;

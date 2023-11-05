import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

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
				// expandIcon={<ExpandMoreIcon/>}
				id="panel1a-header"
			>
				<div className='text-2xl'>{title}</div>
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

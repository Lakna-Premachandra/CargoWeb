import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Accordian() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Consistently safe and on-time deliveries.
        </AccordionSummary>
        <AccordionDetails>
          Our commitment to reliability ensures that your shipments arrive safely and on time, every time. Trusted by businesses globally, we take pride in our consistent performance and dedication to meeting your shipping needs without fail.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Shipping services tailored to your unique requirements
        </AccordionSummary>
        <AccordionDetails>
          At Cargoton, we understand that every business is unique. That’s why we offer tailored shipping services designed to meet your specific requirements. Whether you need specialized handling or flexible delivery options, we’ve got you covered.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Comprehensive logistics network covering worldwide destinations
        </AccordionSummary>
        <AccordionDetails>
          With our extensive logistics network, we provide comprehensive coverage to destinations worldwide. Our expertise in international shipping regulations and practices ensures your cargo navigates seamlessly across borders, no matter where it’s headed.
        </AccordionDetails> 
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          24/7 customer service to address your needs anytime
        </AccordionSummary>
        <AccordionDetails>
          Our dedicated customer service team is available 24/7 to assist you with any concerns or questions. We are here to ensure a smooth shipping experience, providing support every step of the way to keep your business running efficiently..
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

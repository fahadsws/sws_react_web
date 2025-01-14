import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ContactInformation from '../Aboutpage/ContactInformtion';

const Project_requirment = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Box className="project-requirement flex-center ">
        <Box className="container flex-center-column requirement" >
          <Typography variant='h4' className='get_the_best'>
            Get the best quote for your project requirement
          </Typography>
          <Button className='view-more' onClick={openPopup}>Get in Touch</Button>
        </Box>
      </Box>

      {showPopup && <ContactInformation onClose={closePopup} />}
    </>
  );
};

export default Project_requirment;

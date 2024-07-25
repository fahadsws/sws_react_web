import Lets_Build from './Lets_Build'
import Footer2 from '../../Component/Footer2'
import Map from "../../assets/contactus soham web/map.svg";
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

const ContactMan = () => {

  return (
    <>
      <Helmet>
        <title>Contact Us | Soham Web Solution - Website Development Company India</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="You may contact us using the information below" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact Us | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="You may contact us using the information below" />
        <meta property="og:url" content="https://sohamsolution.com/contact-us/" />
        <meta property="og:site_name" content="Soham Web Solution" />
      </Helmet>

      <Lets_Build />
      <Box>
        <img className='map-img' src={Map} alt="" />
      </Box>
      <Footer2 />
    </>
  )
}

export default ContactMan

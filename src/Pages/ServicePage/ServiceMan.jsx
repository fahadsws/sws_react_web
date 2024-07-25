import { Box, Typography } from '@mui/material'
import ServiceContaint from './ServiceContaint'

import Footer2 from '../../Component/Footer2'
import Project_requirment from './Project_requirment'
import { Helmet } from 'react-helmet'

const ServiceMan = () => {



  return (
    <>
      <Helmet>
        <title>Services | Soham Web Solution - Website Development Company India</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Monthly Package" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://sohamsolution.com/services/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Services | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="Monthly Package" />
        <meta property="og:url" content="https://sohamsolution.com/services/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://sohamsolution.com/wp-content/themes/onum/images/price1.png" />
        <meta property="og:image:secure_url" content="https://sohamsolution.com/wp-content/themes/onum/images/price1.png" />
        <meta property="og:image:alt" content="Services" />

      </Helmet>

      <Box >
        <Box className="bg-img ">
          <Typography className='primary-heading' variant='h1' >Services</Typography>
        </Box>
      </Box>

      <ServiceContaint />
      <Project_requirment />
      <Footer2 />
    </>
  )
}

export default ServiceMan

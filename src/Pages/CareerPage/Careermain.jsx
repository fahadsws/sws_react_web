import { Box, Typography } from '@mui/material'
import Footer2 from '../../Component/Footer2'
import WeGrowing from './WeGrowing'
import CurrentOpenings from './CurrentOpenings'
import { Helmet } from 'react-helmet'

const Careermain = () => {

  return (

    <>
      <Helmet>
        <title>Career | Soham Web Solution - Website Development Company India</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="See how Deloitte can support your professional goals and help you find opportunities based on your strengths while advancing our shared values" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://sohamsolution.com/career/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Career | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="See how Deloitte can support your professional goals and help you find opportunities based on your strengths while advancing our shared values" />
        <meta property="og:url" content="https://sohamsolution.com/career/" />
        <meta property="og:site_name" content="Soham Web Solution" />
      </Helmet>


      <Box className="bg-img ">
        <Typography variant='h1' className='primary-heading '>Career</Typography>
      </Box>

      <WeGrowing />
      <CurrentOpenings />
      <Footer2 />
    </>
  )
}

export default Careermain

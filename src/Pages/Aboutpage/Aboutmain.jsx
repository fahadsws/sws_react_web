import { Box, Typography } from '@mui/material'
import AboutSohamWeb from './AboutSohamWeb'
import Leading from './Leading'
import OurVision from './OurVision'
import TecnologicalFoucus from './TecnologicalFoucs'
import ContactInformtion from './ContactInformtion'
import { Helmet } from 'react-helmet'
import OurJourney from './OurJourney'
import Footer2 from '../../Component/Footer2'

const Aboutmain = () => {

  return (
    <>
      <Helmet>
        <title>About | Soham Web Solution - Website Development Company India</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="What makes Soham Web Solution the best selection for your website improvement projects? Here is a specific answer. You can&#039;t stand to waste your reserves for" />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://sohamsolution.com/about/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="What makes Soham Web Solution the best selection for your website improvement projects? Here is a specific answer. You can&#039;t stand to waste your reserves for" />
        <meta property="og:url" content="https://sohamsolution.com/about/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />

        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2023/08/officedesk.png" />
        <meta property="og:image:secure_url" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2023/08/officedesk.png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="841" />
        <meta property="og:image:alt" content="About Soham Web Solution" />
        <meta property="og:image:type" content="image/png" />
      </Helmet>


      <Box className="bg-img about_first " >
        <Typography className='primary-heading' variant='h1'  >
          About
        </Typography>
      </Box>

      <AboutSohamWeb />
      <OurJourney/>
      <TecnologicalFoucus />
      <Leading />
      <OurVision />
      <ContactInformtion />
      <Footer2/>
    </>
  )
}

export default Aboutmain;

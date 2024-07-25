
import { Box, Typography } from '@mui/material'
import Service from './Service'
import Footer2 from '../../../Component/Footer2'
import { Helmet } from 'react-helmet'
import ContactInformation from '../../Aboutpage/ContactInformtion'

const Laraval = () => {

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Laravel Development | Soham Web Solution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="  Best known for its simplicity and beauty, Laravel is a PHP framework that is perfect for creating stunning websites. It provides an extensive feature set that lowers costs and speeds up the development process. Laravel boosts the effectiveness and performance of websites with its built-in routing, authentication, and caching capabilities." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Laravel Development | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="     Best known for its simplicity and beauty, Laravel is a PHP framework that is perfect for creating stunning websites. It provides an extensive feature set that lowers costs and speeds up the development process. Laravel boosts the effectiveness and performance of websites with its built-in routing, authentication, and caching capabilities." />
        <meta property="og:url" content="https://sohamsolution.com/services/Laravel-Development/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:secure_url" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:alt" content="Laravel Development" />
      </Helmet>


      <Box>
        <Box className="bg-img" >
          <Typography className='primary-heading' variant='h1' >Laravel Development</Typography>
        </Box>
      </Box>

      <Box className="service_primary_section  flex-center" >
        <Box className="container">
          <Box className="flex-center-coulmn  service_chid"  >


            <Typography variant='h3' className='service_secondary-heading inner_heading' >
              Web Development with Laravel PHP
            </Typography>

            <Typography variant='h5' className='primary_subheading secvice_child_text' >
              Best known for its simplicity and beauty, Laravel is a PHP framework that is perfect for creating stunning websites. It provides an extensive feature set that lowers costs and speeds up the development process. Laravel boosts the effectiveness and performance of websites with its built-in routing, authentication, and caching capabilities.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Service />
      <ContactInformation />
      <Footer2 />
    </>
  )
}

export default Laraval

import { Box, Typography } from '@mui/material'
import Service from './Service'
import Footer2 from '../../../Component/Footer2'
import { Helmet } from 'react-helmet'
import ContactInformation from '../../Aboutpage/ContactInformtion'

const PHPDevelopment = () => {

  return (
    <>
      <Helmet>
        <title>PHP Development | Soham Web Solution - Website Development Company India</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="  Server-side programming languages like PHP (Hypertext Preprocessor) are widely used in web development. PHP is a versatile language that functions smoothly on all platforms and provides outstanding productivity. It is an open-source, free platform with robust documentation and a vibrant user base. PHP web development efficiently addresses the requirement for enhanced customization and creative solutions in response to the growing need for dynamic content." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PHP Development | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="  Server-side programming languages like PHP (Hypertext Preprocessor) are widely used in web development. PHP is a versatile language that functions smoothly on all platforms and provides outstanding productivity. It is an open-source, free platform with robust documentation and a vibrant user base. PHP web development efficiently addresses the requirement for enhanced customization and creative solutions in response to the growing need for dynamic content." />
        <meta property="og:url" content="https://sohamsolution.com/services/php-development/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
        <meta property="og:updated_time" content="2024-02-22T15:50:04+05:30" />
        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:secure_url" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:width" content="754" />
        <meta property="og:image:height" content="684" />
        <meta property="og:image:alt" content="PHP Development" />
        <meta property="og:image:type" content="image/png" />
      </Helmet>


      <Box>
        <Box className="bg-img  " >
          <Typography className='primary-heading' variant='h1' >PHP Development</Typography>
        </Box>
      </Box>

      <Box className="service_primary_section flex-center" >
        <Box className="container">
          <Box className="flex-center-coulmn service_chid "  >
            <Typography variant='h3' className='service_secondary-heading inner_heading' >
              PHP Development Services for Web Applications
            </Typography>
            <Typography variant='h5' className='primary_subheading secvice_child_text' >
              Server-side programming languages like PHP (Hypertext Preprocessor) are widely used in web development. PHP is a versatile language that functions smoothly on all platforms and provides outstanding productivity. It is an open-source, free platform with robust documentation and a vibrant user base. PHP web development efficiently addresses the requirement for enhanced customization and creative solutions in response to the growing need for dynamic content.
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
export default PHPDevelopment

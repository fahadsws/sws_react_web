import { Box, Typography } from '@mui/material'
import Service from './Service'
import Footer2 from '../../../Component/Footer2'
import { Helmet } from 'react-helmet'
import ContactInformation from '../../Aboutpage/ContactInformtion'

const WordPress = () => {

  return (
    <>
      <Helmet>
        <title>WordPress Development | Soham Web Solution - Website Development Company India</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="All websites are powered by WordPress, the industry-leading content management system. Web developers and designers may construct or update websites with minimal work thanks to this CMS's well-known ease of modification. With its many built-in capabilities, WordPress is perfect for building up both a simple content management system and a powerful blogging platform, which improves search engine exposure. Additionally, because of its adaptability, it may be easily integrated into a variety of platforms, such as e-commerce and content resource management systems ." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://sohamsolution.com/services/wordpress-development/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="WordPress Development | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="All websites are powered by WordPress, the industry-leading content management system. Web developers and designers may construct or update websites with minimal work thanks to this CMS's well-known ease of modification. With its many built-in capabilities, WordPress is perfect for building up both a simple content management system and a powerful blogging platform, which improves search engine exposure. Additionally, because of its adaptability, it may be easily integrated into a variety of platforms, such as e-commerce and content resource management systems ." />
        <meta property="og:url" content="https://sohamsolution.com/services/wordpress-development/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
        <meta property="og:updated_time" content="2023-12-21T11:36:38+05:30" />
        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:secure_url" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:alt" content="wordpress development" />
      </Helmet>
      <Box>
        <Box className="bg-img  " >
          <Typography className='primary-heading' variant='h1' >Wordpress Development</Typography>
        </Box>
      </Box>

      <Box className="service_primary_section  flex-center" >
        <Box className="container">
          <Box className="flex-center-coulmn  service_chid"  >
            <Typography variant='h3' className='service_secondary-heading inner_heading' >
              Customized Services for WordPress Development
            </Typography>
            <Typography variant='h5' className='primary_subheading secvice_child_text' >
              All websites are powered by WordPress, the industry-leading content management system. Web developers and designers may construct or update websites with minimal work thanks to this CMS's well-known ease of modification. With its many built-in capabilities, WordPress is perfect for building up both a simple content management system and a powerful blogging platform, which improves search engine exposure. Additionally, because of its adaptability, it may be easily integrated into a variety of platforms, such as e-commerce and content resource management systems .
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
export default WordPress

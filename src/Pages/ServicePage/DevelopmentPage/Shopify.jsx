
import { Box, Typography, } from '@mui/material'
import Service from './Service'
import Footer2 from '../../../Component/Footer2'
import { Helmet } from 'react-helmet'
import ContactInformation from '../../Aboutpage/ContactInformtion'

const Shopify = () => {

  return (
    <>
      <Helmet>
        <title>Shopify Development | Soham Web Solution - Website Development Company India</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content=" Shopify is a leading ecommerce platform designed to help businesses of all sizes build and customize their online stores with ease. Its user-friendly interface, combined with a vast array of themes and plugins, allows for quick and efficient store setup. Shopify development offers robust features, including secure payment gateways, SEO tools, and mobile responsiveness, ensuring a seamless shopping experience for customers." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://sohamsolution.com/services/shopify-development/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Shopify Development | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content=" Shopify is a leading ecommerce platform designed to help businesses of all sizes build and customize their online stores with ease. Its user-friendly interface, combined with a vast array of themes and plugins, allows for quick and efficient store setup. Shopify development offers robust features, including secure payment gateways, SEO tools, and mobile responsiveness, ensuring a seamless shopping experience for customers." />
        <meta property="og:url" content="https://sohamsolution.com/services/shopify-development/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
        <meta property="og:updated_time" content="2023-12-21T12:03:12+05:30" />
        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:secure_url" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:alt" content="Shopify Development" />
      </Helmet>

      <Box>
        <Box className="bg-img " >
          <Typography className='primary-heading' variant='h1' >Shopify Development</Typography>
        </Box>
      </Box>

      <Box className="service_primary_section  flex-center" >
        <Box className="container">
          <Box className="flex-center-coulmn  service_chid"  >
            <Typography variant='h3' className='service_secondary-heading inner_heading' >
              Shopify E-Commerce Development Services
            </Typography>
            <Typography variant='h5' className='primary_subheading secvice_child_text' >
              Shopify is a leading ecommerce platform designed to help businesses of all sizes build and customize their online stores with ease. Its user-friendly interface, combined with a vast array of themes and plugins, allows for quick and efficient store setup. Shopify development offers robust features, including secure payment gateways, SEO tools, and mobile responsiveness, ensuring a seamless shopping experience for customers.
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
export default Shopify
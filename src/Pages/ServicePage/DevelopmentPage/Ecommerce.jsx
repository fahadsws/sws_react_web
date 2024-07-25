
import { Box, Typography } from '@mui/material'
import Service from './Service'
import Footer2 from '../../../Component/Footer2'
import { Helmet } from 'react-helmet'
import ContactInformation from '../../Aboutpage/ContactInformtion'

const Ecommerce = () => {

  return (
    <>
      <Helmet>
        <title>Ecommerce Development | Soham Web Solution</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content=" OpenCart Development involves creating and customizing ecommerce stores using the OpenCart platform, a robust and open-source solution known for its flexibility and ease of use. OpenCart provides a comprehensive set of features that enable businesses to build and manage online stores efficiently.
        Our OpenCart development services cover a wide range of needs, from setting up new online stores to customizing existing ones for enhanced functionality and user experience. We specialize in creating custom themes, integrating essential plugins, and optimizing store performance to ensure a seamless shopping experience for your customers. With features like multi-store management, SEO optimization, and a user-friendly admin interface, OpenCart empowers businesses to reach their full potential in the digital marketplace." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ecommerce Development | Soham Web Solution" />
        <meta property="og:description" content=" OpenCart Development involves creating and customizing ecommerce stores using the OpenCart platform, a robust and open-source solution known for its flexibility and ease of use. OpenCart provides a comprehensive set of features that enable businesses to build and manage online stores efficiently.
        Our OpenCart development services cover a wide range of needs, from setting up new online stores to customizing existing ones for enhanced functionality and user experience. We specialize in creating custom themes, integrating essential plugins, and optimizing store performance to ensure a seamless shopping experience for your customers. With features like multi-store management, SEO optimization, and a user-friendly admin interface, OpenCart empowers businesses to reach their full potential in the digital marketplace." />
        <meta property="og:url" content="https://sohamsolution.com/services/ecommerce-development/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:secure_url" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:alt" content="ecommerce development" />
      </Helmet>

      <Box>
        <Box className="bg-img  " >
          <Typography className='primary-heading' variant='h1' >Ecommerce Development</Typography>
        </Box>
      </Box>

      <Box className="service_primary_section flex-center" >
        <Box className="service-man flex-center-coulmn "  >
          <Box className="service_primary_section  flex-center" >
            <Box className="container">
              <Box className="flex-center-coulmn  service_chid"  >
                <Typography variant='h3' className='service_secondary-heading inner_heading' >
                  OpenCart E-Commerce Development Services                            </Typography>

                <Typography variant='h5' className='primary_subheading secvice_child_text' >
                  OpenCart Development involves creating and customizing ecommerce stores using the OpenCart platform, a robust and open-source solution known for its flexibility and ease of use. OpenCart provides a comprehensive set of features that enable businesses to build and manage online stores efficiently.
                  Our OpenCart development services cover a wide range of needs, from setting up new online stores to customizing existing ones for enhanced functionality and user experience. We specialize in creating custom themes, integrating essential plugins, and optimizing store performance to ensure a seamless shopping experience for your customers. With features like multi-store management, SEO optimization, and a user-friendly admin interface, OpenCart empowers businesses to reach their full potential in the digital marketplace.
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>

      <Service />
      <ContactInformation />
      <Footer2 />
    </>
  )
}

export default Ecommerce
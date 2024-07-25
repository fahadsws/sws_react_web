
import { Box, Typography } from '@mui/material'
import Service from './Service'
import Footer2 from '../../../Component/Footer2'
import { Helmet } from 'react-helmet'
import ContactInformation from '../../Aboutpage/ContactInformtion'

const WebDesigning = () => {

    return (
        <><Helmet>
            <title>Web Designing | Soham Web Solution - Website Development Company India</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="description" content="Web designing is key to creating an attractive and effective online presence. Our web design services focus on making websites that are both beautiful and easy to use. We ensure that our designs work well on all devices, from computers to smartphones. By understanding your brand and goals, we create custom websites that engage visitors and drive results. Our skilled team is dedicated to delivering websites that look great and function perfectly, helping your business succeed online." />
            <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Web Designing | Soham Web Solution - Website Development Company India" />
            <meta property="og:description" content="Web designing is key to creating an attractive and effective online presence. Our web design services focus on making websites that are both beautiful and easy to use. We ensure that our designs work well on all devices, from computers to smartphones. By understanding your brand and goals, we create custom websites that engage visitors and drive results. Our skilled team is dedicated to delivering websites that look great and function perfectly, helping your business succeed online." />
            <meta property="og:url" content="https://sohamsolution.com/services/web-designing/" />
            <meta property="og:site_name" content="Soham Web Solution" />
            <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
            <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
            <meta property="fb:app_id" content="693022102389649" />
            <meta property="og:image" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
            <meta property="og:image:secure_url" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
            <meta property="og:image:alt" content="Web Designing" />
        </Helmet>
            <Box>
                <Box className="bg-img" >
                    <Typography className='primary-heading' variant='h1' >Website Designing</Typography>
                </Box>
            </Box>

            <Box className="service_primary_section  flex-center" >
                <Box className="container">
                    <Box className="flex-center-coulmn  service_chid"  >
                        <Typography variant='h3' className='service_secondary-heading inner_heading' >
                            Professional Web Design Services
                        </Typography>
                        <Typography variant='h5' className='primary_subheading secvice_child_text' >
                            Web designing is key to creating an attractive and effective online presence. Our web design services focus on making websites that are both beautiful and easy to use. We ensure that our designs work well on all devices, from computers to smartphones. By understanding your brand and goals, we create custom websites that engage visitors and drive results. Our skilled team is dedicated to delivering websites that look great and function perfectly, helping your business succeed online.
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
export default WebDesigning
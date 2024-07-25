import { Box, Typography } from '@mui/material'
import Service from './Service'
import Footer2 from '../../../Component/Footer2'
import { Helmet } from 'react-helmet'
import ContactInformation from '../../Aboutpage/ContactInformtion'

const Codeigniter = () => {

  return (
    <>
      <Helmet>
        <title>CodeIgniter Development | Soham Web Solution</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="  CodeIgniter is an open-source PHP framework designed for developing high-end dynamic websites and applications. For developing custom CodeIgniter, it provides a comprehensive range of tools and libraries. CodeIgniter makes the development process more efficient with less configuration requirements. Programmers and developers can finish projects more quickly and effectively because to its special capabilities, which drastically decrease the need for substantial code." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://sohamsolution.com/services/CodeIgniter-development/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CodeIgniter | Soham Web Solution - Website Development Company India" />
        <meta property="og:description" content="  CodeIgniter is an open-source PHP framework designed for developing high-end dynamic websites and applications. For developing custom CodeIgniter, it provides a comprehensive range of tools and libraries. CodeIgniter makes the development process more efficient with less configuration requirements. Programmers and developers can finish projects more quickly and effectively because to its special capabilities, which drastically decrease the need for substantial code." />
        <meta property="og:url" content="https://sohamsolution.com/services/CodeIgniter-development/" />
        <meta property="og:site_name" content="Soham Web Solution" />
        <meta property="article:publisher" content="https://www.facebook.com/sohamsolution" />
        <meta property="article:author" content="https://www.facebook.com/anilmeena4/" />
        <meta property="fb:app_id" content="693022102389649" />
        <meta property="og:image" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:secure_url" content="https://sohamsolution.com/staging/wp-content/uploads/2020/02/image2-home4.png" />
        <meta property="og:image:alt" content="CodeIgniter Development" />
      </Helmet>



      <Box >
        <Box className="bg-img  " >
          <Typography className='primary-heading' variant='h1' >
            CodeIgniter Development
          </Typography>
        </Box>
      </Box>

      <Box className="service_primary_section flex-center " >
        <Box className="container">
          <Box className="flex-center-coulmn  service_chid"  >
            <Typography variant='h3' className='service_secondary-heading inner_heading' >
              CodeIgniter Development Services for Web Applications
            </Typography>
            <Typography variant='h5' className='primary_subheading secvice_child_text' >
              CodeIgniter is an open-source PHP framework designed for developing high-end dynamic websites and applications. For developing custom CodeIgniter, it provides a comprehensive range of tools and libraries. CodeIgniter makes the development process more efficient with less configuration requirements. Programmers and developers can finish projects more quickly and effectively because to its special capabilities, which drastically decrease the need for substantial code.
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

export default Codeigniter

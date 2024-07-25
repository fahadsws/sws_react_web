import { Box, Typography } from '@mui/material';
import React from 'react'
import Footer2 from '../../Component/Footer2';
import { Helmet } from 'react-helmet';

const Support = () => {
    return (
        <>
            <Helmet>

                <title>
                    Support and Maintenance Packages | Soham Web Solution - Website Development Company India
                </title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="description" content="Ensuring Your Website&#039;s Peak Performance" />
                <meta name="robots" content="follow, noindex" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Support and Maintenance Packages | Soham Web Solution - Website Development Company India" />
                <meta property="og:description" content="Ensuring Your Website&#039;s Peak Performance" />
                <meta property="og:url" content="https://sohamsolution.com/support-and-maintenance-packages/" />
                <meta property="og:site_name" content="Soham Web Solution" />
            </Helmet>

            <Box className="flex-center bg-img  " >
                <Typography variant='h2' className='primary-heading'> Support and Maintenance Packages
                </Typography>
            </Box>
            <Box className="flex-center">
                <Box className="container flex-center">
                        <Box className="flex-center-column privacy_man"  >
                            <Typography className='terms_conditon_heading'>Ensuring Your Website’s Peak Performance
                            </Typography>
                            <Typography className="terms_conditon_content">At Soham Web Solution, we understand the importance of a seamlessly operating website. Our Support and Maintenance Packages are designed to keep your online presence robust, secure, and up-to-date, allowing you to focus on your core business activities. Explore our packages below to find the one that best suits your needs.</Typography>
                            <Typography className='terms_conditon_heading'> Package Options</Typography>
                            <Typography className='terms_conditon_heading'>Basic Care</Typography>

                            <Box className="terms_conditon_content  " >
                                <li><b className='terms_conditon_heading'>Monthly Performance Check</b>Regular assessments to ensure optimal website speed and functionality.</li>
                                <li><b className='terms_conditon_heading'>Security Updates</b>Stay protected with timely security patches and updates.</li>
                                <li><b className='terms_conditon_heading'> Content Updates</b>Routine content updates and minor adjustments.</li>
                            </Box>

                            <Typography className="terms_conditon_content">Ideal for smaller websites with basic maintenance needs</Typography>

                            <Typography className='terms_conditon_heading'>Pro Support</Typography>

                            <Box className="terms_conditon_content " >
                                <li><b className='terms_conditon_heading'>24/7 Monitoring:</b>Continuous monitoring for potential issues, providing proactive solutions.</li>
                                <li><b className='terms_conditon_heading'>Priority Issue Resolution:</b>Immediate attention to critical issues, ensuring minimal downtime.</li>
                                <li><b className='terms_conditon_heading'>Bi-weekly Performance Optimization:</b>Ongoing tweaks for improved speed and efficiency.</li>
                            </Box>

                            <Typography className="terms_conditon_content">Perfect for growing businesses with a moderate volume of traffic.</Typography>

                            <Typography className='terms_conditon_heading'>Elite Management</Typography>

                            <Box className="terms_conditon_content  " >
                                <li><b className='terms_conditon_heading'>Dedicated Account Manager:</b>Personalized service and strategic planning for your website.</li>
                                <li><b className='terms_conditon_heading'>Custom Development Hours:</b>Exclusive hours for additional features, improvements, or enhancements.</li>
                                <li><b className='terms_conditon_heading'>Weekly Performance Audits:</b> In-depth analysis to identify and address potential bottlenecks.</li>
                            </Box>

                            <Typography className="terms_conditon_content">Tailored for high-traffic websites or those with complex functionalities</Typography>

                            <Typography className='terms_conditon_heading'>Why Choose Soham Web Solution’s Support and Maintenance?</Typography>

                            <Box className="terms_conditon_content  ">
                                <li><b className='terms_conditon_heading'>Experienced Team:</b>Our team of experts is well-versed in the latest technologies and industry best practices.</li>
                                <li><b className='terms_conditon_heading'>Proactive Approach: </b>We believe in proactive maintenance, preventing issues before they impact your website.</li>
                                <li><b className='terms_conditon_heading'>Flexible Packages:</b> Choose the package that aligns with your website’s specific needs and growth trajectory.</li>
                            </Box>
                            <Typography className='terms_conditon_heading'>Get Started</Typography>
                            <Typography className="terms_conditon_content">Selecting the right support and maintenance package is a crucial investment in the longevity and success of your online presence. Click on the package links above to explore the detailed offerings, pricing, and benefits.</Typography>
                            <Typography className="terms_conditon_content">If you have any questions or need assistance in choosing the right package, feel free to contact us. We’re here to ensure your website operates at its best!</Typography>
                        </Box>
                    </Box>
                </Box>
            <Footer2 />
        </>
    )
}

export default Support;

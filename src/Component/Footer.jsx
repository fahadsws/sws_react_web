import { Box, Button, Typography } from "@mui/material"
import Swslogo from "../assets/soham.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchcontents } from "../features/content/contentSlice"
import { Link } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);

    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <>
            <Box className="flex-center man-want "  >
                <Box className='want flex-center' >
                    <Typography >Want to know more about Soham Web's Life? </Typography>
                    <Link className='text-decortion' to={`life-at-soham/`}><Button>Life@Soham</Button></Link>
                </Box>
            </Box>
            <Box color={"#FFFFFF"} className="flex-center footer" flexDirection={'column'}  >
                <Box className="footer_padding_section container" paddingTop={10} display={'flex'} alignItems={'start'} justifyContent={"space-between"} flexWrap={'wrap'}>
                    <Box className="footer-sec1" >
                        <Link to="/" >
                            <img color='#FFFFFF' src={Swslogo} alt="" className='sws-logo' />
                        </Link>
                        <Typography color={'#FFFFFF'} marginTop={2.5} >
                            {contents.footerData.aboutText}
                        </Typography>
                    </Box>

                    <Box className="footer-sec2" >
                        <Typography id="footer-h3" variant="h3"  > {contents.footerData.quickLinks.heading}</Typography>
                        <Box className="footer2-box" marginTop={2} display={'flex'} alignItems={"start"} flexDirection={"column"}>
                            <Link to={`about/`} className="text-decortion color-white" >{contents.footerData.quickLinks.text1}</Link>
                            <Link to={`career/`} className="text-decortion color-white" >{contents.footerData.quickLinks.text3}</Link>
                            <Link to={`contact-us/`} className="text-decortion color-white">{contents.footerData.quickLinks.text4}</Link>
                            <Link to={`blogs/`} className="text-decortion color-white" >{contents.footerData.quickLinks.text5}</Link>
                        </Box>
                    </Box>

                    <Box className="footer-sec3 " >
                        <Typography id="footer-h3" variant="h3"  >{contents.footerData.policyLinks.heading}</Typography>
                        <Box className="footer3-box" marginTop={2}  >
                            <Typography > <Link className="color-white text-decortion" to={`services/php-development/`} >PHP Development</Link></Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`services/wordpress-development/`}  >Wordpress Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`services/shopify-development/`} >Shopify Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`services/web-designing/`}  >Website Designing
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`services/graphic-designing/`}>Graphic Designing
                                </Link>
                            </Typography>
                            <Typography>
                                <Link className="color-white text-decortion" to={`services/ecommerce-development/`} >E-commerce Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`services/laraval-development/`}  >Laravel Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`services/Codeigniter-development/`}  >CodeIgniter Development
                                </Link>
                            </Typography>

                            <Typography>
                                <Link className="color-white text-decortion" to={`services/react-native-development/`} >React Native Development
                                </Link>
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="footer-sec4" >
                        <Typography id="footer-h3" variant="h3"    >
                            {contents.footerData.contactDetails.heading}</Typography>
                        <Box className="footer2-box" marginTop={2}>
                            <a target="_blank" className="text-decortion" style={{ display: "flex", alignItems: "center" }} href="tel:+917879231700" margin={0.5}  >
                                <IoCall color="white" fontSize={16} />
                                <Typography className="text-decortion" paddingLeft={1}>{contents.footerData.contactDetails.text1}</Typography>
                            </a>

                            <a target="_blank" className="text-decortion" style={{ display: "flex", alignItems: "center" }} href="tel:+917000335673" margin={0.5}   >
                                <IoCall color="white" fontSize={16} />
                                <Typography className="text-decortion" paddingLeft={1}>{contents.footerData.contactDetails.text2}</Typography>
                            </a>

                            <a target="_blank" className="text-decortion" style={{ display: "flex", alignItems: "center" }} href="tel:+917984740805" margin={0.5} >
                                <IoCall color="white" fontSize={16} />
                                <Typography className="text-decortion" paddingLeft={1}>{contents.footerData.contactDetails.text3}</Typography>
                            </a>

                            <a target="_blank" href="mailto:contact@sohamsolution.com" className="text-decortion" style={{ display: "flex", alignItems: "center" }}  >
                                <MdEmail id="maill" color="white" fontSize={16} />
                                <Typography className="text-decortion" paddingLeft={1}>{contents.footerData.contactDetails.text4}</Typography>
                            </a>

                            <a target="_blank" href="https://www.google.com/maps/place/Soham+Web+Solution+-+Web+Development+Company/@22.9648902,76.0458359,17z/data=!4m14!1m7!3m6!1s0x3963177600d4efb5:0x33c81c908e54629c!2sSoham+Web+Solution+-+Web+Development+Company!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9!3m5!1s0x3963177600d4efb5:0x33c81c908e54629c!8m2!3d22.9648902!4d76.0480299!16s%2Fg%2F11b66gp4d9"
                                className="text-decortion" style={{ display: "flex", alignItems: "start" }} margin={0.5} >
                                <FaLocationDot fontSize={16} color="white" />

                                <Typography className="text-decortion" paddingLeft={1}>{contents.footerData.contactDetails.text5}</Typography>
                            </a>
                        </Box>
                        <Box className="flex-between footer-sec-icon"  >
                            <ul>
                                <li>
                                    <a className="social_icon" target="_blank" href="https://www.facebook.com/sohamsolution/">
                                        <i class="fab fa-facebook-f icon"></i>    </a>
                                </li>
                                <li>
                                    <a className="social_icon" target="_blank" href="https://www.instagram.com/sohamwebsolution/"><i class="fab fa-instagram icon"></i></a>
                                </li>
                                <li>
                                    <a className="social_icon" target="_blank" href="https://www.youtube.com/@SohamWebSolutionDewas"><i class="fab fa-youtube icon"></i></a>
                                </li>
                                <li>
                                    <a className="social_icon" target="_blank" href="https://in.linkedin.com/company/soham-web-solution"><i class="fab fa-linkedin-in icon"></i></a></li>
                                <li>
                                    <a className="social_icon" target="_blank" href="https://profiles.wordpress.org/sohamwebsolution/"><i class="fab fa-wordpress icon"></i></a>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>

                <Box className="copyright "   >
                    <Box className="copyright-child  flex-between-wrap" >
                        <Box>
                            <Typography >
                                {contents.footerData.copyrightText}
                            </Typography>
                        </Box>

                        <Box className="copyright-privacy" >
                            < Link to={`privacy-policy/`} className="color-white "   >
                                Privacy
                            </Link>

                            <Typography> |  </Typography>
                            < Link to={`terms-conditions/`} className="color-white "   >
                                Terms
                            </Link>
                            <Typography> |  </Typography>
                            < Link to={`support-and-maintenance-packages/`} className="color-white "  >
                                Support
                            </Link>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Footer;


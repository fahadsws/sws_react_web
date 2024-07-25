
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Typography, useMediaQuery } from '@mui/material';
import Text1 from "../../../assets/Testimonial/test1.svg";
import Text2 from "../../../assets/Testimonial/test2.svg";
import Text4 from "../../../assets/Testimonial/test4.svg";
import Text5 from "../../../assets/Testimonial/test5.svg";
import Text6 from "../../../assets/Testimonial/test6.svg";
import Text7 from "../../../assets/Testimonial/test7.svg";
import Min_img from "../../../assets/Testimonial/min-img.png";
import Footer2 from '../../Component/Footer2';

const Item = styled(Paper)(({ theme }) => ({
}));


const Testimonial = () => {
    const isMediumScreen = useMediaQuery('(max-width:768px)');
    const isSmallScreen = useMediaQuery('(max-width:576px)');

    const columns = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

    return (
        <>
            <Box className="bg-img">
                <Typography variant='h1' className='primary-heading'>
                    Testimonial
                </Typography>
            </Box>

            <Box className="flex-center">
                <Box className="container">

                    <Masonry className='Testimonial_masonry' columns={columns} spacing={2}   >

                        {/* 1 */}
                        <Item className='Testimonial_contener'>
                            <img className='Testimonial_img' src={Text1} alt="Testimonial 1" />
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>

                                <Box className="line"></Box>
                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box >
                                        <Typography >Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>

                        {/* 2 */}
                        <Item className='Testimonial_contener'>
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>
                                <Box className="line"></Box>

                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>

                        {/* 3 */}
                        <Item className='Testimonial_contener'>
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>

                                <Box className="line"></Box>
                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>

                        {/* 4 */}
                        <Item className='Testimonial_contener'>
                            <img className='Testimonial_img' src={Text2} alt="Testimonial 1" />
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>
                                <Box className="line"></Box>

                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>

                        {/* 5 */}
                        <Item className='Testimonial_contener'>
                            <img className='Testimonial_img' src={Text4} alt="Testimonial 1" />
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>
                                <Box className="line"></Box>

                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>

                        {/* 6 */}
                        <Item className='Testimonial_contener'>
                            <img className='Testimonial_img' src={Text5} alt="Testimonial 1" />
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>

                                <Box className="line"></Box>

                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>

                        {/* 7*/}
                        <Item className='Testimonial_contener'>
                            <img className='Testimonial_img' src={Text6} alt="Testimonial 1" />
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>
                                <Box className="line"></Box>

                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>

                        </Item>

                        {/* 8 */}
                        <Item className='Testimonial_contener'>
                            <img className='Testimonial_img' src={Text7} alt="Testimonial 1" />
                            <Box className=" Testimonial_Box">
                                <Typography>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>
                                <Box className="line"></Box>

                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>


                        {/* 9 */}
                        <Item className='Testimonial_contener'>
                            <Box className=" Testimonial_Box">
                                <Typography> Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec tincidunt risus ac semper aliquet. Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque  dapibus tellus. Sed ante quam, sodales eu dapibus quis, rutrum ut mi. Morbi a  tellus vitae turpis iaculis aliquam.</Typography>
                                <Box className="line"></Box>

                                <Box className="Testimonial_name_lastName flex-between">
                                    <img src={Min_img} alt="" />
                                    <Box>
                                        <Typography>Joy Hudson</Typography>
                                        <Typography>Managing Partner</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>
                    </Masonry>
                </Box>
            </Box>
            <Footer2 />
        </>
    );
}

export default Testimonial;


import { Box, Typography } from '@mui/material'
import React from 'react'
import AllProject from './AllProject'
import Footer2 from '../../Component/Footer2'

const Project_Main = () => {
    return (
        <>
            <Box className="flex-center">
                <Box className="project_bg_img flex-center">
                    <Box className="flex-center-column container color-white" textAlign={"center"}>
                        <Typography className='project-heading'>Discover Our Success Stories</Typography>
                        <Typography className='primary_subheading partner-content our-utality-p' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt risus ac semper aliquet.
                            Vestibulum turpis nibh, faucibus sed lacus eget, scelerisque dapibus tellus.
                        </Typography>
                    </Box>
                </Box>
            </Box>


            <AllProject />
            <Footer2/>
        </>
    )
}

export default Project_Main

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Project1 from "../../assets/Project/project1.png"
import Project2 from "../../assets/Project/project2.png"
import Project3 from "../../assets/Project/project3.png"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


const Business_Can_Back = () => {
    return (
        <>
            <Box className="flex-center" bgcolor={"e6f0fd"} >
                <Box className="container">
                    <Typography className='secondary_heading' variant='h2' >
                        Business You Can Back
                    </Typography>


                    <Box className="flex-between project_card_section">
                        <Card className='project_card'>
                            <Box className="business_img">
                                <img src={Project1} alt="" />
                            </Box>
                            <CardContent>
                                <Box className="display-flex-start Design_section">
                                    <Button variant="contained">Design</Button>
                                    <AccessTimeFilledIcon />
                                    <Typography >0 Days Left</Typography>
                                </Box>
                                <Typography className='business_heading' marginY={2} gutterBottom variant="h5">
                                    Audio Phile - Smart Wireless Headphones
                                </Typography>
                                <Box className="flex-between amount">
                                    <Box>
                                        <Typography variant="h6">$30,000.00</Typography>
                                        <Typography variant="body2">Goal of $36,000.00</Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6" color={"#1976d2"}>1+</Typography>
                                        <Typography variant="body2">Backers We Got</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card className='project_card'>
                            <Box className="business_img">
                                <img src={Project2} alt="" />
                            </Box>
                            <CardContent>
                                <Box className="display-flex-start Design_section">
                                    <Button variant="contained">Design</Button>
                                    <AccessTimeFilledIcon />
                                    <Typography >0 Days Left</Typography>
                                </Box>
                                <Typography className='business_heading' marginY={2} gutterBottom variant="h5">
                                    Audio Phile - Smart Wireless Headphones
                                </Typography>
                                <Box className="flex-between amount">
                                    <Box>
                                        <Typography variant="h6">$30,000.00</Typography>
                                        <Typography variant="body2">Goal of $36,000.00</Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6" color={"#1976d2"}>1+</Typography>
                                        <Typography variant="body2">Backers We Got</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card className='project_card'>
                            <Box className="business_img">
                                <img src={Project3} alt="" />
                            </Box>
                            <CardContent>
                                <Box className="display-flex-start Design_section">
                                    <Button variant="contained">Design</Button>
                                    <AccessTimeFilledIcon />
                                    <Typography >0 Days Left</Typography>
                                </Box>
                                <Typography className='business_heading' marginY={2} gutterBottom variant="h5">
                                    Audio Phile - Smart Wireless Headphones
                                </Typography>
                                <Box className="flex-between amount">
                                    <Box>
                                        <Typography variant="h6">$30,000.00</Typography>
                                        <Typography variant="body2">Goal of $36,000.00</Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6" color={"#1976d2"}>1+</Typography>
                                        <Typography variant="body2">Backers We Got</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Business_Can_Back


import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Our1 from "../assets/our service/our1.svg"
import Our2 from "../assets/our service/our2.svg"
import Our3 from "../assets/our service/our3.svg"
import Our4 from "../assets/our service/our4.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../features/content/contentSlice'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const OurUtility = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);

    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <Box className=" flex-center">
            <Box className="flex-center-column utility container "  >

                <Box className="flex-center-coulmn ">
                    <Typography variant='h2' className='secondary_heading'>
                        {contents.ourutility.heading}
                    </Typography>
                    <Typography className='primary_subheading our-utality-p '>
                        {contents.ourutility.contant}
                    </Typography>
                </Box>

                <Box className="web-devlopment flex-between " >
                    <Link to={`services/web-designing/`} className='text-decortion flex-center  box_utility flex-center-coulmn' >
                        <img src={Our1} alt="" className="zoom-img" />
                        <Typography >
                            Web Designing  & Development
                        </Typography>
                    </Link>

                    <Link to={`services/graphic-designing/`} className='text-decortion flex-center  box_utility flex-center-coulmn'   >
                        <img src={Our2} alt="" className="zoom-img" />
                        <Typography  >
                            Graphic  Design
                        </Typography>
                    </Link>

                    <Link to={`services/ecommerce-development/`} className='text-decortion flex-center  box_utility flex-center-coulmn'  >
                        <img src={Our3} alt="" className="zoom-img" />
                        <Typography  >
                            E-commerce Development
                        </Typography>
                    </Link>

                    <Link to={`services/react-native-development/`} className='text-decortion flex-center  box_utility flex-center-coulmn'  >
                        <img src={Our4} alt="" className="zoom-img" />
                        <Typography >
                            Mobile App  Development
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default OurUtility

import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BoxCategories from './BoxCategories';
import { Helmet } from 'react-helmet';

const Festival_section = ({ Api_url }) => {
    const location = useLocation();
    const { name, description } = location.state || {};
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setShowLoader(false);
        }, 2000);

        return () => clearTimeout(loaderTimeout);
    }, []);

    return (
        <>
            <Helmet>
                <title>{`categories/${name} | Soham Web Solution`}</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="description" content={`${name} `} />
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                <link rel="canonical" href="https://sohamsolution.com/categories/festivals/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`categories/${name} | Soham Web Solution - Website Development Company India`} />
                <meta property="og:description" content={`${description} `} />
                <meta property="og:url" content="https://sohamsolution.com/categories/festivals/" />
                <meta property="og:site_name" content="Soham Web Solution" />
            </Helmet>

            <Box className="bg-img">
                <Typography variant='h1' className='primary-heading'>
                    {showLoader ? <CircularProgress /> : name}
                </Typography>
            </Box>
            {!showLoader && (
                <>
                    <BoxCategories Api_url={Api_url} />
                </>
            )}
        </>
    );
}

export default Festival_section;
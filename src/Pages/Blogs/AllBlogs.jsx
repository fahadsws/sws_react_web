import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Carditem from './Carditem';
import { fetchblogcontents } from '../../features/blog/blogsSlice';
import AllPagination2 from './AllPagination2';
import Footer2 from '../../Component/Footer2';
import { Helmet } from 'react-helmet';

const AllBlogs = ({ Api_url }) => {
    const dispatch = useDispatch();
    const { blogcontents, isLoading } = useSelector((state) => state.blogs);
    const [showPagination, setShowPagination] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchblogcontents());
        };
        fetchData();

        const timeoutId = setTimeout(() => {
            setShowPagination(true);
        });

        return () => clearTimeout(timeoutId);
    }, [dispatch, isLoading]);

    return (
        <>
            <Helmet>
                <title>Blogs | Soham Web Solution - Website Development Company India</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="description" content="You will get posts related to web development technologies, their future scope, latest features and more in our blogs page." />
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                <link rel="canonical" href="https://sohamsolution.com/blogs/" />
                <link rel="next" href="https://sohamsolution.com/blogs/page/2/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blogs | Soham Web Solution - Website Development Company India" />
                <meta property="og:description" content="You will get posts related to web development technologies, their future scope, latest features and more in our blogs page." />
                <meta property="og:url" content="https://sohamsolution.com/blogs/" />
                <meta property="og:site_name" content="Soham Web Solution" />
            </Helmet>
            <Box>
                <Box className="bg-img ">
                    <Typography variant='h1' className='primary-heading ' >
                        All Blogs
                    </Typography>
                </Box>
                <Box className="flex-center">
                    <Box className="flex-center container">
                        <Box className="flex-between-wrap blog_section "  >
                            {blogcontents.map((blogcontent) => (
                                <Carditem key={blogcontent?.id} blogcontent={blogcontent} />
                            ))}
                            {showPagination && <AllPagination2 Api_url={Api_url} />}
                        </Box>
                    </Box>
                </Box>
                <Footer2 />
            </Box>
        </>
    );
};

export default AllBlogs;


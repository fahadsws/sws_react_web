import { Box, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import NextPrevious from './NextPrevious';
import Footer2 from '../../Component/Footer2';
import Categories from './Categories';
import { Helmet } from 'react-helmet';

const Singlecontent = ({ Api_url }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const location = useLocation();
  const id = location.state ? location.state.id : null;

  useEffect(() => {
    if (!id) {
      console.error('No id found in location state');
      return;
    }

    fetch(`${Api_url}posts/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id, Api_url]);

  if (loading) {
    return (
      <Box display="flex" justifyContent={"center"} marginY={10} height={"100VH"}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Helmet>

        <title>{`${blog?.title?.rendered}| Soham Web Solution`}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content={blog?.excerpt?.rendered || "Default description"} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${blog?.title?.rendered} | Soham Web Solution`} />
        <meta property="og:description" content={blog?.excerpt?.rendered || "Default description"} />
        <meta property="og:url" content={`https://sohamsolution.com/posts/${id}`} />
        <meta property="og:image" content={blog?.jetpack_featured_media_url || "default-image-url"} />
        <meta property="og:image:secure_url" content={blog?.jetpack_featured_media_url || "default-image-url"} />
        <meta property="og:image:width" content="1201" />
        <meta property="og:image:height" content="631" />
        <meta property="og:image:alt" content="Headless CMS and API-first applications" />
        <meta property="og:image:type" content="image/jpeg" />
      </Helmet>

      <Box className="flex-center" flexDirection={"column"}>
        <Box className="bg-img">
          <Typography className='single_blog_heading primary-heading' margin="auto" variant='h1'>
            {blog?.title?.rendered}
          </Typography>
        </Box>

        <Box className="singleblogpage-man">
          <Box className="all-pg420 container">
            <Box className="bg-img single_blog_heading"></Box>
            <img className='singleblogpage-img' src={blog?.jetpack_featured_media_url} alt="" />
            <Box className="singlepage-section2">
              <Typography flexWrap={'wrap'} className='singleblog_text' marginY={3} dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }} />
              <NextPrevious currentId={id} Api_url={Api_url} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="flex-center">
        <Categories Api_url={Api_url} />
      </Box>
      <Footer2 />
    </>
  );
}

export default Singlecontent;
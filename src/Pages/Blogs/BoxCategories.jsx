import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { fetchcategories } from '../../features/Categories/categoriesSlice';
import Carditem from './Carditem';
import Footer2 from '../../Component/Footer2';
import Categories_name from './Categories';

const BoxCategories = ({ Api_url }) => {
  const dispatch = useDispatch();
  const { categoriescontents, isLoading: categoriesLoading } = useSelector((state) => state.categorie);
  const [loading, setLoading] = useState(true);
  const [blogContentForPageTwo, setBlogContentForPageTwo] = useState([]);

  const params = useParams();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(fetchcategories());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://sohamsolution.com/wp-json/wp/v2/posts?categories=${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.slug}`);
          }
          return response.json();
        })
        .then(data => {
          setBlogContentForPageTwo(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (categoriesLoading || loading) {
    return (
      <Box display="flex" justifyContent="center" marginY={10} height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
     
      
      <Box className="flex-center flex-coulmn box-card " >
        <Box className="blog480-center container" >
          {Array.isArray(blogContentForPageTwo) ? (
            blogContentForPageTwo.map((blog) => (
              <Carditem key={blog.id} blogcontent={blog} />
            ))
          ) : (
            <Box>Data is not an array</Box>
          )}
        </Box>

        <Box className="box-section container" paddingY={"0PX"}>
          <Categories_name />
        </Box>
      </Box>
      <Footer2 />
    </>
  );
}

export default BoxCategories;




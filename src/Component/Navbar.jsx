import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Swslogo from "../../assets/HomePage_img/soham.svg"
import Down from "../../assets/HomePage_img/down-arow.svg"
import Sidebar from '../Pages/Toggle/Sidebar';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ScrollToTopButton from '../Child-Component/ScrollToTopButton';
// import ScrollToTopBottomButton from '../ScrollToTopButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Box className='navbar ' sx={{ bgcolor: "#053480" }} position={"sticky"} top={"0%"} >
      <Box className="flex-center"  >
        <Box className="flex-between navbar-height "  >
          <Link to="/" >
            <img color='#FFFFFF' src={Swslogo} alt="" className='sws-logo' />
          </Link>

          <Box flexGrow={1 / 10} className="flex-between ul-list"
            sx={{ display: { xs: 'none', md: 'flex' } }}>


            <Box className="ul-box service_child_menu" >

              <Link className='color-white text text-decortion' to={`about/`}  >Company</Link>
              <Typography className='fontSize16' marginTop={"2px"}>
                <Box style={{ position: 'relative' }} ref={menuRef}>
                  <Box style={{ cursor: 'pointer' }} className='navbar-ul'>
                    <img className='down-arrow' src={Down} alt="" />
                  </Box>

                  <Box className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                    <ul >
                      <Link className='text_color_blue text-decortion link_space' to={`about/`} onClick={closeMenu}>About us</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`career/`} onClick={closeMenu}>Career</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`blogs/`} onClick={closeMenu}>Blogs</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`life-at-soham/`} onClick={closeMenu}>Life@Soham</Link>

                      <Link className='text_color_blue text-decortion link_space' to={`testimonial/`} onClick={closeMenu}>Testimonial</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`project/`} onClick={closeMenu}>Project</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`singleproject/`} onClick={closeMenu}>Single-Project</Link>

                    </ul>
                  </Box>
                </Box>

              </Typography>
            </Box>
            <Box className="ul-box service_child_menu" >
              <Link className='color-white text text-decortion' to={`services/`}  >Services</Link>
              <Typography className='fontSize16' marginTop={"2px"}>
                <Box style={{ position: 'relative' }} ref={menuRef}>
                  <Box style={{ cursor: 'pointer' }} className='navbar-ul'>
                    <img className='down-arrow' src={Down} alt="" />
                  </Box>

                  <Box className={`dropdown_menu ${isOpen ? 'open' : ''}`} >
                    <ul  >
                      <Link className='text_color_blue text-decortion link_space' to={`services/php-development/`} onClick={closeMenu}>PHP Development</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/wordpress-development/`} onClick={closeMenu}>Wordpress Development</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/shopify-development/`} onClick={closeMenu}>Shopify Development</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/web-designing/`} onClick={closeMenu}>Website Designing</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/graphic-designing/`} onClick={closeMenu}>Graphic Designing</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/ecommerce-development/`} onClick={closeMenu}>E-commerce Development</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/laraval-development/`} onClick={closeMenu}>Laravel Development</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/codeigniter-development/`} onClick={closeMenu}>CodeIgniter Development</Link>
                      <Link className='text_color_blue text-decortion link_space' to={`services/react-native-development/`} onClick={closeMenu}>React Native Development</Link>
                    </ul>
                  </Box>
                </Box>
              </Typography>
            </Box>

            <Link className="text-decortion flex-center hire-button" to={`contact-us/`}>Contact us</Link>

          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Sidebar />
        </Box>
      </Box>
      <ScrollToTopButton />
    </Box>
  )
}

export default Navbar;

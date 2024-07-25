import { Box, Typography } from '@mui/material'
import React from 'react'
import Single_project1 from "../../assets/Project/single_project/project1.png"
import Right_icon from "../../assets/Project/right_icon.svg"
import Single_project2 from "../../assets/Project/single_project/project2.png"
import Single_project3 from "../../assets/Project/single_project/project3.png"
import Single_project4 from "../../assets/Project/single_project/project4.png"
import Footer2 from '../../Component/Footer2'
import Business_Can_Back from './Business_Can_Back'

const Project_singlecontent = () => {
  return (
    <>
      <Box className="flex-center" >
        <Box className="bg-img">
          <Typography className='single_blog_heading primary-heading' margin="auto" variant='h1'>
            Project
          </Typography>
        </Box>
      </Box>

      <Box className="flex-center single_project">
        <Box className="container">
          <Box className="single_project_imgsection1">
            <img src={Single_project1} alt="" />
          </Box>

          <Box className="text_project">
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac  tortor eget odio tincidunt faucibus dignissim et ex. Aliquam quam risus, dapibus non diam vitae, placerat sagittis dolor. Fusce ut orci eu sem sagittis lobortis in id diam. Mauris ac arcu id nisi luctus fermentum et eget nisi. Mauris fringilla condimentum urna, quis scelerisque nibh viverra et.
            </Typography>

            <Box className="project_ul_section">
              <Box>
                <img src={Right_icon} alt="" />
                <Typography>Nsectur cing mauris quis risus laoreet elit.</Typography>
              </Box>

              <Box>
                <img src={Right_icon} alt="" />
                <Typography>Suspe ndisse dolor sit amet suscipit sagittis leo.</Typography>
              </Box>

              <Box>
                <img src={Right_icon} alt="" />
                <Typography>Entum estibulum metus aliquam egestas dignissim posuere.</Typography>
              </Box>

              <Box>
                <img src={Right_icon} alt="" />
                <Typography>If you are going to use a auctor nec purus passage.</Typography>
              </Box>

            </Box>
          </Box>

          <Box className="flex-between-wrap project_img_section2">
            <Box>
              <img src={Single_project2} alt="" />
            </Box>
            <Box>
              <img src={Single_project3} alt="" />
            </Box>
          </Box>
          <Box className="text_project">
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor eget odio tincidunt faucibus dignissim et ex.Aliquam quam risus, dapibus non diam vitae, placerat sagittis dolor. Fusce ut orci eu sem sagittis lobortis in id diam.Mauris ac arcu id nisi luctus fermentum et eget nisi. Mauris fringilla condimentum urna, quis scelerisque nibh viverra et.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque,nibh et accumsan scelerisque, neque neque consectetur massa, at elementum lorem mauris eget lectus.Pellentesque tempor elit nec elit vestibulum dapibus. Nam at commodo elit, sit amet ultricies sem.t tincidunt, eros id egestas cursus, lacus tortor tristique massa, sed llamcorper tellus metus at neque.
            </Typography>
          </Box>

          <Box className="single_project_imgsection1" marginTop={2}>
            <img src={Single_project4} alt="" />
          </Box>

          <Box className="text_project">
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tortor eget odio tincidunt faucibus dignissim et ex.Aliquam quam risus, dapibus non diam vitae, placerat sagittis dolor. Fusce ut orci eu sem sagittis lobortis in id diam.Mauris ac arcu id nisi luctus fermentum et eget nisi. Mauris fringilla condimentum urna, quis scelerisque nibh viverra et.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque,nibh et accumsan scelerisque, neque neque consectetur massa, at elementum lorem mauris eget lectus.Pellentesque tempor elit nec elit vestibulum dapibus. Nam at commodo elit, sit amet ultricies sem.t tincidunt, eros id egestas cursus, lacus tortor tristique massa, sed llamcorper tellus metus at neque.
            </Typography>
          </Box>
          <Business_Can_Back/>
        </Box>
      </Box>

      {/* <Business_Can_Back/> */}
      <Footer2/>
    </>
  )
}

export default Project_singlecontent

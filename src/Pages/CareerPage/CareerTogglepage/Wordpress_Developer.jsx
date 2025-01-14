import React, { useState } from 'react';
import { Typography, Box, Modal, Backdrop } from '@mui/material';
import CareerButton from '../../../Child-Component/CareerButton';
import CareerForm from './CareerForm';

function Wordpress_Developer() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleCloseModal = () => {
        setShowForm(false);
    };
    return (
        <Box >
            <Box className="content-toggle" >
                <Box className="D-CENTER"  >
                    <Typography className='career_toggle_subheading' >Experience :</Typography>
                    <Typography className='Typography-gray-career space_career_toggle' > 0-1 year</Typography>
                </Box>

                <Box className="D-CENTER" marginY={1}>
                    <Typography className='career_toggle_subheading'>Number of opening:</Typography>
                    <Typography className='Typography-gray-career space_career_toggle'  > 1</Typography>
                </Box>

                <Box className="D-CENTER" flexWrap={"wrap"} marginBottom={3}>
                    <Typography className='career_toggle_subheading'>Location :</Typography>
                    <Typography className='Typography-gray-career space_career_toggle' > 12,Civil Lines,Chamunda Complex,Dewas  </Typography>
                </Box>

                <Box className="career-pregraph ">
                    <Typography className='toggle_heading_career' >Roles & Responsibilities</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >

                            Design and implement attractive and functional websites using WordPress.                                    </Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >
                            Customize WordPress themes and plugins to meet client specifications.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Ensure website performance and troubleshoot issues.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Collaborate with the design team to ensure visual coherence and user experience.</Typography>
                    </Box>

                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Maintain and update website features and security.
                        </Typography>
                    </Box>
                </Box>

                <Box className="toggle_heading_career">
                    <Typography className='toggle_heading_career' >Qualifications:</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Proficiency in WordPress, including custom theme and plugin development.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Strong understanding of front-end technologies, such as HTML5, CSS3, JavaScript, and jQuery.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" > Experience with PHP and MySQL.</Typography>

                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Familiarity with website architecture and aesthetics.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" > Knowledge of SEO best practices.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" > Excellent problem-solving skills and attention to detail.
                        </Typography>
                    </Box>
                </Box>

                <Box className="toggle_heading_career">
                    <Typography className='toggle-typo'  >Why Soham Web Solutions:</Typography>

                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Be part of a creative team that values innovation and quality.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Work on projects that challenge your skills and allow for personal growth.</Typography>
                    </Box>
                    <Box className="D-CENTER" >
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Enjoy a supportive work environment that encourages new ideas.</Typography>
                    </Box>
                    <Box className="D-CENTER">
                        <Typography className='dot'>•</Typography>
                        <Typography className="Typography-gray-career margin-left-1" >Contribute to projects that make a real difference for our clients.</Typography>
                    </Box>

                    <Box className="D-CENTER" >
                        <Typography className="Typography-gray-career margin-left-1" >If you're a WordPress enthusiast with a knack for creating stunning and user-friendly websites, we'd love to have you on board. Apply to Soham Web Solutions and let's create digital masterpieces together!</Typography>
                    </Box>

                </Box>
                <Box>
                    <CareerButton onClick={toggleForm} />

                    <Modal
                        open={showForm}
                        onClose={handleCloseModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            sx: { backdropFilter: 'blur(0.01px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh',
                        }}>
                            <CareerForm heading=" Wordpress Developer" onClose={handleCloseModal} />
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </Box>
    );
}

export default Wordpress_Developer;


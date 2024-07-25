
import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import Project1 from '../../assets/Project/project1.png';
import Project2 from '../../assets/Project/project2.png';
import Project3 from '../../assets/Project/project3.png';
import Project4 from '../../assets/Project/project4.png';
import Project5 from '../../assets/Project/project5.png';
import Project6 from '../../assets/Project/project6.png';

const projects = [
    {
        image: Project1,
        title: 'Project 1',
        description: 'This is a brief description of Project 1.',
    },
    {
        image: Project2,
        title: 'Project 2',
        description: 'This is a brief description of Project 2.',
    },
    {
        image: Project3,
        title: 'Project 3',
        description: 'This is a brief description of Project 3.',
    },
    {
        image: Project4,
        title: 'Project 4',
        description: 'This is a brief description of Project 4.',
    },
    {
        image: Project5,
        title: 'Project 5',
        description: 'This is a brief description of Project 5.',
    },
    {
        image: Project6,
        title: 'Project 6',
        description: 'This is a brief description of Project 6.',
    },
];

const AllProject = () => {
    return (
        <>
            <Box className="flex-center">
                <Box className="container flex-between-wrap project">
                    {projects.map((project, index) => (
                        <Box className="project_box" key={index}>
                            <img src={project.image} alt={project.title} />
                            <Box className="overlay">
                                <Typography variant="h6">{project.title}</Typography>
                                <Typography variant="body1">{project.description}</Typography>
                                <Button sx={{margin:"3px"}} variant="contained" color="primary">Learn More</Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default AllProject;
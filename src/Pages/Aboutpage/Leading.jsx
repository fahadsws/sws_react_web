// import { Box, Typography } from '@mui/material'
// import React, { useEffect } from 'react'
// import co1 from "../../assets/AboutSection1/neeraj malakar.svg"
// import co2 from "../../assets/AboutSection1/anil meena.svg"
// import co3 from "../../assets/AboutSection1/ravi yadav.svg"
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchcontents } from '../../features/content/contentSlice'

// const Leading = () => {
//     const dispatch = useDispatch()
//     const { contents, isLoading, isError } = useSelector((state) => state.content);

//     useEffect(() => {
//         dispatch(fetchcontents())
//     }, [dispatch]);

//     return (
//         <>
//             <Box className="flex-center">
//                 <Box className=" leadership container"  >
//                     <Box className="flex-center-coulmn ">
//                         <Typography className='secondary_heading' variant='h2' >
//                             {contents.Leadership.heading}
//                         </Typography>

//                         <Typography className='primary_subheading our-utality-p'   >
//                             {contents.Leadership.content}
//                         </Typography>
//                     </Box>
//                     <Box className="team flex-center" >
//                         <Box className="flex-center-column leadership_box">
//                             <img className='img_ceo' src={co1} alt="" />
//                             <Typography className="ceo_name" >Neeraj Malakar</Typography>
//                             <Typography className='leadership-p' >Founder & CEO</Typography>
//                         </Box>
//                         <Box className="flex-center-column leadership_box">
//                             <img className='img_ceo' src={co2} alt="" />
//                             <Typography className="ceo_name">Anil Meena</Typography>
//                             <Typography className='leadership-p'>CTO & COO</Typography>
//                         </Box>
//                         <Box className="flex-center-column leadership_box">
//                             <img className='img_ceo' src={co3} alt="" />
//                             <Typography className="ceo_name">Ravi Yadav</Typography>
//                             <Typography className='leadership-p'>Founder & CEO</Typography>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default Leading





import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import co1 from "../../assets/AboutSection1/neeraj malakar.svg";
import co2 from "../../assets/AboutSection1/anil meena.svg";
import co3 from "../../assets/AboutSection1/ravi yadav.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const Leading = () => {
    const dispatch = useDispatch();
    const { contents, isLoading, isError } = useSelector((state) => state.content);
    const boxesRef = useRef([]);
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        dispatch(fetchcontents());

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(scrollDirection === 'down' ? 'slideUp' : 'slideDown');
                    } else {
                        entry.target.classList.remove('slideUp', 'slideDown');
                    }
                });
            },
            { threshold: 0.5 }
        );

        boxesRef.current.forEach((box) => {
            if (box) observer.observe(box);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            boxesRef.current.forEach((box) => {
                if (box) observer.unobserve(box);
            });
        };
    }, [dispatch, scrollDirection]);

    return (
        <Box className="flex-center">
            <Box className="leadership container">
                <Box className="flex-center-column">
                    <Typography className='secondary_heading' variant='h2'>
                        {contents.Leadership.heading}
                    </Typography>

                    <Typography className='primary_subheading our-utality-p'>
                        {contents.Leadership.content}
                    </Typography>
                </Box>
                <Box className="team flex-center">
                    {['Neeraj Malakar', 'Anil Meena', 'Ravi Yadav'].map((name, index) => (
                        <Box
                            key={index}
                            ref={(el) => (boxesRef.current[index] = el)}
                            className="flex-center-column leadership_box"
                        >
                            <img className='img_ceo' src={[co1, co2, co3][index]} alt={name} />
                            <Typography className="ceo_name">{name}</Typography>
                            <Typography className='leadership-p'>
                                {index === 0 ? 'Founder & CEO' : index === 1 ? 'CTO & COO' : 'Founder & CEO'}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Leading;
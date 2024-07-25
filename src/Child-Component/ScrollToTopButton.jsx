import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 350); // Button tabhi dikhai dega jab scroll 200px se zyada ho
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const scrollDuration = 2500; // 5 seconds
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        isVisible && (
            <Tooltip title="Scroll to Top" arrow>
                <IconButton
                    aria-label="scroll to top"
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        zIndex: 999,
                        background: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50px',
                    }}
                >
                    <ArrowUpwardIcon
                        sx={{
                            background: 'white',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50px',
                            color: '#053480',

                        }}
                    />
                </IconButton>
            </Tooltip>
        )
    );
};

export default ScrollToTopButton;
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import HeroSection from './HeroSection';
import OurUtility from './OurUtility';
import OurWork from './OurWork';
import ClientAbout from './ClientAbout';
import OurCustomer from './OurCustomer';
import OurPartner from './OurPartner';

const HomeSection = () => {
    return (
        <>
            <Helmet>
            <meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta name="format-detection" content="telephone=no"/>

<meta name="description" content="Soham Web Solution is a website development company based in central India. We have expertise in building websites and applications using various frameworks."/>
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<link rel="canonical" href="https://sohamsolution.com/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Home | Soham Web Solution - Website Development Company India" />
<meta property="og:description" content="Soham Web Solution is a website development company based in central India. We have expertise in building websites and applications using various frameworks." />
<meta property="og:url" content="https://sohamsolution.com/" />
<meta property="og:site_name" content="Soham Web Solution" />
<meta property="og:updated_time" content="2024-03-16T16:26:18+05:30" />
<meta property="fb:app_id" content="693022102389649" />
<meta property="og:image" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2024/01/slide1-home51.webp" />
<meta property="og:image:secure_url" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2024/01/slide1-home51.webp" />
<meta property="og:image:width" content="1920" />
<meta property="og:image:height" content="800" />
<meta property="og:image:alt" content="Website Development Company" />
<meta property="og:image:type" content="image/webp" />
            </Helmet>


            <Box>
                <HeroSection />
                <OurUtility />
                <OurWork />
                <ClientAbout />
                <OurCustomer />
                <OurPartner />
                <Footer />
            </Box>
        </>
    );
}

export default HomeSection;




// import { Box } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import Footer from './Footer';
// import HeroSection from './HeroSection';
// import OurUtility from './OurUtility';
// import OurWork from './OurWork';
// import ClientAbout from './ClientAbout';
// import OurCustomer from './OurCustomer';
// import OurPartner from './OurPartner';

// const HomeSection = () => {
//     return (
//         <>
//             <Helmet>
//                 <title>Home | Soham Web Solution - Website Development Company India</title>
//                 <meta charset="UTF-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <meta name="format-detection" content="telephone=no" />
//                 <meta name="description" content="Soham Web Solution is a website development company based in central India. We have expertise in building websites and applications using various frameworks." />
//                 <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
//                 <link rel="canonical" href="https://sohamsolution.com/" />
//                 <meta property="og:locale" content="en_US" />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:title" content="Home | Soham Web Solution - Website Development Company India" />
//                 <meta property="og:description" content="Soham Web Solution is a website development company based in central India. We have expertise in building websites and applications using various frameworks." />
//                 <meta property="og:url" content="https://sohamsolution.com/" />
//                 <meta property="og:site_name" content="Soham Web Solution" />
//                 <meta property="og:updated_time" content="2024-03-16T16:26:18+05:30" />
//                 <meta property="fb:app_id" content="693022102389649" />
//                 <meta property="og:image" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2024/01/slide1-home51.webp" />
//                 <meta property="og:image:secure_url" content="https://i0.wp.com/sohamsolution.com/wp-content/uploads/2024/01/slide1-home51.webp" />
//                 <meta property="og:image:width" content="1920" />
//                 <meta property="og:image:height" content="800" />
//                 <meta property="og:image:alt" content="Website Development Company" />
//                 <meta property="og:image:type" content="image/webp" />
//             </Helmet>

//             <Box>
//                 <HeroSection />
//                 <OurUtility />
//                 <OurWork />
//                 <ClientAbout />
//                 <OurCustomer />
//                 <OurPartner />
//                 <Footer />
//             </Box>
//         </>
//     );
// }

// export default HomeSection;


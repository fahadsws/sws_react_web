
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    id: "ram",
    title: 'Company',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: `about/`,


    subNav: [
      {

        className: "flex",
        title: 'About us',
        path: `about/`,
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Career',
        path: `career/`,
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Blogs',
        path: `blogs/`,
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Contact us',
        path: `contact-us/`,
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Life@soham',
        path: `life-at-soham/`,
        icon: <IoIcons.IoIosPaper />
      }
    ]

  },
  {
    title: 'Services',
    path: `services/`,
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'PHP development',
        icon: <IoIcons.IoIosPaper />,
        ClassName: 'sub-nav',
        path: `services/php-development/`,
      },

      {
        title: 'WordPress Develoment',
        icon: <IoIcons.IoIosPaper />,
        ClassName: 'sub-nav',
        path: `services/wordpress-development/`,
      },

      {
        title: 'Shopify Development',
        icon: <IoIcons.IoIosPaper />,
        path: `services/shopify-development/`,
      },

      {
        title: 'Web Designing',
        icon: <IoIcons.IoIosPaper />,
        path: `services/web-designing/`,
      },

      {
        title: 'Graphic Designing',
        icon: <IoIcons.IoIosPaper />,
        path: `services/graphic-designing/`,
      },

      {
        title: 'Ecommerce Development',
        icon: <IoIcons.IoIosPaper />,
        path: `services/ecommerce-development/`,
      },

      {
        title: 'Laravel Development',
        icon: <IoIcons.IoIosPaper />,
        path: `services/laraval-development/`,
      },

      {
        title: 'CodeIgniter Development',
        icon: <IoIcons.IoIosPaper />,
        path: `services/codeigniter-development/`,
      },

      {
        title: 'React Native Development',
        icon: <IoIcons.IoIosPaper />,
        path: `services/react-native-development/`,
      }
    ]
  },
  
];

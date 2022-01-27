/** @jsx jsx */
import { jsx, Text, Image, Link } from 'theme-ui';
import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Box } from '../Animations';
import BadgeItem from './badgeItem';
import { projectCardStyles } from '../../utils';
import TrulyYours from '../../images/Truly_Yours.png';

const ProjectCard = ({ delayPerPixel = 0.0008 }) => {


  const [hoverState, setHoverState] = useState('hidden');

  const originOffset = useRef({ top: 0, left: 0 });

  const sumVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: 0.2,
        duration: 0.4
      }
    }
  };

  const linkVariants = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        bounce: 0.4,
        duration: 0.4
      }
    }
  };

  const badges = ['React', 'Gatsby', 'GraphQl', 'ThemeUI', 'Contentful', 'Shopify'];

  return (
    <div
      sx={projectCardStyles.container}
    >
      <Box
        amount={.7}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pl: [3, 0]
        }}
      >
        <Text
          variant='text.h2'
          sx={{
            mb: [1],
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: '0px',
            color: 'black',
            fontSize: ['24px', null, null, '28px']
          }}
        >
          Truly Yours
        </Text>
        <Text
          variant='text.h4'
          sx={{
            mb: [1],
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: '0px',
            fontWeight: 'body',
            color: 'black',
            fontSize: ['18px', '20px']
          }}
        >
          Brand Platform
        </Text>
        <div
          sx={{
            mb: [4],
            lineHeight: 1.5,
            fontWeight: 300,
            color: 'text',
            fontSize: ['14px', 2],
            fontStyle: 'italic',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Developed: December 2021
        </div>
      </Box>

      <Box
        amount={.5}
        onHoverStart={() => {
          setHoverState('visible');
        }}
        onTouchStart={() => {
          setHoverState('visible');
        }}
        onHoverEnd={() => {
          setHoverState('hidden');
        }}
        onTouchMove={() => {
          setHoverState('hidden');
        }}

        sxChildStyle={{
          overflow: 'hidden',
          position: 'relative',
          '&:hover > img': {
            filter: 'blur(6px)',
            transition: '200ms ease-in-out'
          },
          '&:hover > div': {
            opacity: 1,
            transition: '200ms ease-in-out'
          }
        }}
      >
        <Image
          src={TrulyYours}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: '200ms ease-in-out',
            minHeight: ['80vw', '330px'],
          }}
        />
        <div

          sx={{
            opacity: 0,
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            bg: 'rgba(255,255,255, .4)',
            transition: '200ms ease-in-out',
            py: 2,
            px: 3
          }}
        >
          <motion.p
            variants={sumVariants}
            initial='hidden'
            animate={hoverState}
            sx={{
              mb: [4],
              lineHeight: 1.5,
              fontWeight: 300,
              color: 'text',
              fontSize: ['14px', 2],
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Aute laborum nostrud mollit reprehenderit fugiat id incididunt voluptate. Sint voluptate elit ipsum dolor nisi consequat proident dolor mollit elit proident elit excepteur ad. Ullamco eiusmod sint aliqua adipisicing Lorem magna proident mollit magna.
          </motion.p>
          <motion.div
            initial="hidden"
            animate={hoverState}
            variants={{}}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}
          >
            {badges.map((badge, i) => {
              return (
                <BadgeItem
                  key={i}
                  originIndex={0}
                  delayPerPixel={delayPerPixel}
                  originOffset={originOffset}
                  animate={hoverState}
                >
                  {badge}
                </BadgeItem>
              );
            })
            }
          </motion.div>
        </div>
      </Box>
      <Box
        childVariant={linkVariants}
        sxChildStyle={{
          display: 'flex',
          flexDirection: 'row',
          pl: [3, 0],
          fontWeight: 400,
        }}
      >
        <Link
          href={'https://trusting-wright-b79dc8.netlify.app'}
          sx={{
            color: 'blue',
            fontSize: '16px',
            mr: '7px'
          }}
          target='_blank'
        >
          View Site
        </Link>
        <Link
          href={'https://github.com/jakobbergeson'}
          sx={{
            color: 'blue',
            fontSize: '16px',
          }}
          target='_blank'
        >
          {' '}  | View Repo
        </Link>
      </Box>
    </div>
  );

};

export default ProjectCard;
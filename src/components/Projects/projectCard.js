/** @jsx jsx */
import { jsx, Text, Image, Link } from 'theme-ui';
import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Box } from '../Animations';
import BadgeItem from './badgeItem';
import { projectCardStyles } from '../../utils';

const ProjectCard = ({
  i,
  header,
  subHeader,
  devDate,
  description,
  tools,
  siteUrl,
  repoUrl,
  sitePic,
  delayPerPixel = 0.0008 }) => {

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

  const linkVariants =
  {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        bounce: 0.4,
        duration: 0.4
      }
    }
  };

  const dividerVariant = {
    hidden: {
      y: -20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        type: "spring",
        bounce: 0.4,
        duration: 0.4
      }
    }
  };

  return (
    <div
      sx={projectCardStyles.container}
    >
      <Box
        amount={.7}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pl: [3, 0],
          textAlign: ['left', null, null, null, null, i % 2 === 0 ? 'left' : 'right']
        }}
      >
        <Text
          variant='text.h2'
          sx={projectCardStyles.header}
        >
          {header}
        </Text>
        <Text
          variant='text.h4'
          sx={projectCardStyles.subHeader}
        >
          {subHeader}
        </Text>
        <div
          sx={projectCardStyles.devDate}
        >
          {devDate}
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
        onTouchEnd={() => {
          setHoverState('hidden');
        }}

        sxChildStyle={
          hoverState === 'visible' ?
            projectCardStyles.imageBox.hover :
            projectCardStyles.imageBox.notHover
        }
        style={{}}
      >
        <Image
          src={sitePic}
          sx={projectCardStyles.image}
        />
        <div

          sx={projectCardStyles.descDiv}
        >
          <motion.p
            variants={sumVariants}
            initial='hidden'
            animate={hoverState}
            sx={projectCardStyles.description}
          >
            {description}
          </motion.p>
          <motion.div
            initial="hidden"
            animate={hoverState}
            sx={projectCardStyles.tools}
          >

            {tools.map((tool, index) => {
              return (
                <BadgeItem
                  key={index}
                  originIndex={0}
                  delayPerPixel={delayPerPixel}
                  originOffset={originOffset}
                  animate={hoverState}
                >
                  {tool}
                </BadgeItem>
              );
            })}
          </motion.div>
        </div>
      </Box>
      <Box
        childVariant={linkVariants}
        amount={.7}
        sxChildStyle={{
          display: 'flex',
          flexDirection: 'row',
          pl: [3, 0],
          fontWeight: 400,
          justifyContent: ['left', null, null, null, null, i % 2 === 0 ? 'start' : 'end'],
          alignItems: 'center'
        }}
      >
        <Link
          href={siteUrl}
          sx={projectCardStyles.link}
          target='_blank'
        >
          View Site
        </Link>
        <Box
          childVariant={dividerVariant}
          sx={{
            mx: 1,
            my: 0,
            lineHeight: 1,
            color: 'blue',
            textAlign: 'center',
            fontSize: ['30px'],
          }}
        > |
        </Box>
        <Link
          href={repoUrl}
          sx={projectCardStyles.link}
          target='_blank'
        >
          View Repo
        </Link>
      </Box>
    </div>
  );

};

export default ProjectCard;
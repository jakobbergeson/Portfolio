/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { aboutStyles } from "../../utils/";

const cardVariants = {
  offscreen: {
    y: '50%',
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4
    }
  }
};

const About = () => {
  return (
    <div
      sx={aboutStyles.wrapper}
    >

      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: .6 }}
      >
        <motion.div
          variants={cardVariants}
        >
          Amet sint dolore amet non ipsum. Laborum anim tempor velit Lorem quis quis est. Eu sunt est deserunt consequat proident magna quis voluptate culpa exercitation id. Id adipisicing consectetur tempor occaecat consectetur deserunt sunt. Exercitation labore nisi ea incididunt aliqua aliquip Lorem laboris. Enim irure incididunt voluptate minim. Sit adipisicing excepteur velit reprehenderit reprehenderit adipisicing.
        </motion.div>
      </motion.div>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: .6 }}
      >
        <motion.div
          variants={cardVariants}
        >
          Mollit adipisicing adipisicing nostrud mollit cupidatat ad minim adipisicing ipsum consectetur et. Officia culpa et dolore officia adipisicing commodo non minim et exercitation pariatur aliqua aliquip voluptate. Lorem veniam veniam cupidatat ex proident cillum pariatur elit proident est. Eu incididunt minim culpa culpa mollit anim eiusmod fugiat in consectetur ullamco pariatur voluptate magna. Elit in voluptate nisi occaecat excepteur anim aliqua elit consectetur ullamco in.
        </motion.div>
      </motion.div>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: .6 }}
      >
        <motion.div
          variants={cardVariants}
        >
          Fugiat in ad reprehenderit eu in. Nostrud culpa enim non laborum. Deserunt elit consequat voluptate voluptate dolor proident est elit adipisicing consequat laborum cillum consequat.        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
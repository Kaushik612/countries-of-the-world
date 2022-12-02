import React from 'react'

//Framer motion
import { AnimatePresence, motion } from 'framer-motion'

//Chakra UI
import { Flex } from "@chakra-ui/react";

//React components
import Navbar from '../components/Navigation/Navbar';
import {Outlet} from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
        <Navbar />
        <Flex as="main" w="full" direction="column" py={[20, 24]}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <motion.div
            //   key={router.route}
              animate="enter"
              exit="exit"
              variants={{
                initial: { opacity: 0, y: -25 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 25 },
              }}
            >
            <Outlet/>
            </motion.div>
          </AnimatePresence>
        </Flex>
    </>
  )
}

export default AppLayout
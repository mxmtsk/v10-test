import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    //paddingTop: 300,
    y: 0
  },
  enter: {
    opacity: 1,
    //paddingTop: 0,
    transition: {
      duration: 3,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  }
}

const Transition = ({ children }) => {
  return (
    <motion.div
        variants={variants}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        style={{
          width: '100vw',
        }}
      >
        {children}
      </motion.div>
  )
}

export default Transition;
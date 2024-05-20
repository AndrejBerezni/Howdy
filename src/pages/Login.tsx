import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
import LoginAdditionalOptions from '../components/authentication/LoginAdditionalOptions'
import LoginForm from '../components/authentication/LoginForm'
import LogoWithName from '../components/LogoWithName'

export default function LoginPage() {
  return (
    <motion.section
      key="login-page"
      initial={{
        opacity: 0,
        scaleY: 0,
        //Filter combined with spring transition was causing multiple errors of this type in console:
        //'Invalid keyframe value for property filter: grayscale(-0.00542%) blur(-0.00054px)'
        // So, I am commenting it out until I find the solution for it
        // filter: 'grayscale(100%) blur(10px)',
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
        // filter: 'none',
      }}
      transition={{
        duration: 1.5,
        type: 'spring',
        ease: 'linear',
      }}
      className="flex flex-col items-center gap-8 py-8"
    >
      <LogoWithName />
      <LoginForm />
      <LoginAdditionalOptions />
    </motion.section>
  )
}

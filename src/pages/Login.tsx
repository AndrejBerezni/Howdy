import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
import LoginAdditionalOptions from '../components/LoginAdditionalOptions'
import LoginForm from '../components/LoginForm'
import LogoWithName from '../components/LogoWithName'

export default function LoginPage() {
  return (
    <motion.section
      key="login-page"
      initial={{
        opacity: 0,
        scaleY: 0,
        filter: 'grayscale(100%) blur(10px)',
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
        filter: 'none',
      }}
      transition={{
        duration: 1.5,
        type: 'spring',
        ease: 'linear',
      }}
      exit={{
        x: -200,
        opacity: 0,
      }}
      className="flex flex-col items-center gap-8 py-8"
    >
      <LogoWithName />
      <LoginForm />
      <LoginAdditionalOptions />
    </motion.section>
  )
}

import { motion } from 'framer-motion'
import RegisterForm from '../components/authentication/RegisterForm'
import LogoWithName from '../components/LogoWithName'

export default function RegisterPage() {
  return (
    <motion.section
      key="register-page"
      initial={{
        opacity: 0,
        x: 200,
        //Filter combined with spring transition was causing multiple errors of this type in console:
        //'Invalid keyframe value for property filter: grayscale(-0.00542%) blur(-0.00054px)'
        // So, I am commenting it out until I find the solution for it
        // filter: 'grayscale(100%) blur(10px)',
      }}
      animate={{
        opacity: 1,
        x: 0,
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
      <RegisterForm />
    </motion.section>
  )
}

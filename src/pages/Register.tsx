import { motion } from 'framer-motion'
import LogoWithName from '../components/LogoWithName'
import RegisterForm from '../components/RegisterForm'

export default function RegisterPage() {
  return (
    <motion.section
      key="register-page"
      initial={{
        opacity: 0,
        x: 200,
        filter: 'grayscale(100%) blur(10px)',
      }}
      animate={{
        opacity: 1,
        x: 0,
        filter: 'none',
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

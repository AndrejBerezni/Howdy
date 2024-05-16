import LogoWithName from '../components/LogoWithName'
import RegisterForm from '../components/RegisterForm'

export default function RegisterPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8">
      <LogoWithName />
      <RegisterForm />
    </section>
  )
}

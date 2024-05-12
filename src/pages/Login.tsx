import LoginForm from '../components/LoginForm'
import LogoWithName from '../components/LogoWithName'
export default function LoginPage() {
  return (
    <section className="flex flex-col items-center gap-8">
      <LogoWithName />
      <LoginForm />
    </section>
  )
}

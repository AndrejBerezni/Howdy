import { Outlet } from 'react-router'
import ControlPanel from '../components/controlpanel'

export default function MessengerPage() {
  return (
    <section className="w-full h-screen p-0 sm:p-6 lg:p-12 flex">
      <ControlPanel />
      <Outlet />
    </section>
  )
}

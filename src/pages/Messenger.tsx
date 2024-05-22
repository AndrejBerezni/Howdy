import { Outlet } from 'react-router'
import ControlPanel from '../components/controlpanel'

export default function MessengerPage() {
  return (
    <div className="w-full h-screen p-0 sm:p-6 lg:p-12 flex shadow-[2px_2px_5px_#ffffff]">
      <ControlPanel />
      <Outlet />
    </div>
  )
}

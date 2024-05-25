import { FiMessageSquare } from 'react-icons/fi'
export default function MessageButton() {
  return (
    <button className="group flex flex-col items-center hover:text-secondary duration-150">
      <FiMessageSquare className=" text-3xl" />
      <p className="text-xs invisible group-hover:visible">Message</p>
    </button>
  )
}

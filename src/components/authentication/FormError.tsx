import { BiError } from 'react-icons/bi'

export default function FormError({ message }: Readonly<{ message: string }>) {
  return (
    <div className="sm:max-w-[400px] text-center self-center flex-col flex gap-2 items-center justify-center text-xl text-primary font-bold tracking-wider">
      <BiError className="text-4xl" />
      <p>{message}</p>
    </div>
  )
}

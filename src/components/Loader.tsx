import { useMemo } from 'react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export default function Loader({ size }: { size: 'button' | 'page' }) {
  const pieces = useMemo(() => Array.from({ length: 4 }, (_, i) => i + 1), [])
  const delays = useMemo(
    () => ({
      '1': 0,
      '2': 0.2,
      '3': 0.6,
      '4': 0.4,
    }),
    []
  )

  return (
    <div
      className={clsx('grid grid-cols-2 grid-rows-2 gap-1 w-fit self-center', {
        'gap-1': size === 'button',
        'gap-4': size === 'page',
      })}
    >
      {pieces.map((piece) => (
        <motion.div
          key={`loader-piece-${piece}`}
          className="bg-primary shadow-md"
          initial={{
            x: piece % 2 === 0 ? -2 : 2,
            scale: 0.4,
            rotate: 0,
            borderRadius: 5,
            height: size === 'button' ? '10px' : '40px',
            width: size === 'button' ? '10px' : '40px',
          }}
          animate={{
            x: 0,
            scale: 1,
            rotate: piece % 2 === 0 ? -90 : 90,
            borderRadius: 2,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: delays[String(piece) as keyof typeof delays],
          }}
        ></motion.div>
      ))}
    </div>
  )
}

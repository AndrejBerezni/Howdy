import { useEffect } from 'react'
import Dialog from './components/Dialog'
import useAccessValidation from './hooks/useAccessValidation'
import Router from './router/Routes'

function App() {
  const { validateAccess } = useAccessValidation()

  useEffect(() => {
    validateAccess()
  }, [validateAccess])

  return (
    <main className="w-full dark:bg-[url('background-dark.png')] bg-[url('background-light.png')] bg-repeat bg-contain font-nunito min-h-screen flex-col overscroll-x-none flex justify-center items-center text-text dark:text-textDark">
      <Router />
      <Dialog />
    </main>
  )
}

export default App

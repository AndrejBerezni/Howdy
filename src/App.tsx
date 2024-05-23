import { useEffect } from 'react'
import useAccessValidation from './hooks/useAuthValidation'
import Router from './router/Routes'

function App() {
  const { validateAccess } = useAccessValidation()

  useEffect(() => {
    validateAccess()
  }, [validateAccess])

  return (
    <main className="w-full dark:bg-[url('background-dark.png')] bg-[url('background-light.png')] bg-repeat bg-contain font-nunito min-h-screen flex-col overscroll-x-none flex justify-center items-center text-text dark:text-textDark">
      <Router />
    </main>
  )
}

export default App

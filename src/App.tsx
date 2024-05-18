import Router from './router/Routes'

function App() {
  return (
    <main className="w-full dark:bg-[url('background-dark.png')] bg-[url('background-light.png')] bg-repeat bg-contain font-nunito min-h-screen flex-col overscroll-x-none flex justify-center items-center text-text dark:text-textDark">
      <Router />
    </main>
  )
}

export default App

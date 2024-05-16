import Router from './router/Routes'

function App() {
  return (
    <main className="w-full font-nunito min-h-screen flex-col overscroll-x-none flex justify-center items-center bg-background dark:bg-backgroundDark text-text dark:text-textDark">
      <Router />
    </main>
  )
}

export default App

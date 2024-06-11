export default function LogoWithName() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img
        alt="Howdy logo"
        src="/Logo-no-bg.png"
        className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-background dark:bg-backgroundDark"
      />
      <h1 className="uppercase tracking-widest font-extrabold text-2xl md:text-4xl font-nunito text-primary hover:cursor-default">
        Howdy!
      </h1>
    </div>
  )
}

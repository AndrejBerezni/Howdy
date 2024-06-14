import clsx from 'clsx'

export default function ListSelectButtons({
  listInView,
  setListInView,
}: Readonly<{
  listInView: 'chats' | 'friends'
  setListInView: (list: 'chats' | 'friends') => void
}>) {
  return (
    <div className="py-4 w-full flex justify-around">
      {['chats', 'friends'].map((list) => (
        <button
          key={`${list}-select-btn`}
          onClick={() => setListInView(list as 'chats' | 'friends')}
          className={clsx(
            'uppercase shadow-md tracking-wider font-montserrat min-w-[40%] rounded-3xl font-semibold py-1',
            {
              'bg-primary text-background dark:text-backgroundDark':
                listInView === list,
              'bg-secondary text-primary hover:bg-primary dark:hover:text-backgroundDark hover:text-background':
                listInView !== list,
            }
          )}
        >
          {list}
        </button>
      ))}
    </div>
  )
}

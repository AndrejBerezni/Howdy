import { BiSolidError, BiInfoSquare } from 'react-icons/bi'
import { RiCloseLargeLine } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { hideDialog } from '../store/dialog'
import { getDialog } from '../store/dialog/selectors'

export default function Dialog() {
  const dispatch = useDispatch()
  const dialog = useSelector(getDialog)

  const handleClose = () => dispatch(hideDialog())

  if (dialog.type !== '') {
    return (
      <>
        <div className="bg-background flex flex-col gap-6 dark:bg-backgroundDark rounded-xl border-2 border-primary backdrop:bg-red-500 fixed top-1/3 left-1/2 -translate-x-1/2 w-[90%] sm:w-[500px] p-4 pb-6 z-20">
          <div className="w-full flex justify-between text-2xl text-primary">
            {dialog.type === 'error' ? <BiSolidError /> : <BiInfoSquare />}
            <button
              type="button"
              onClick={handleClose}
              className="hover:text-text dark:hover:text-textDark"
            >
              <RiCloseLargeLine />
            </button>
          </div>
          <p className="md:text-xl text-lg text-center">{dialog.message}</p>
        </div>
        <div
          className="z-10 bg-text opacity-70 fixed top-0 left-0 w-full h-full"
          onClick={handleClose}
        ></div>
      </>
    )
  }
}

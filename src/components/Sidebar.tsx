import { useAppDispatch } from '../store/hooks'
import { removeUser } from '../store/slices/userSlice'

export default function Sidebar() {
  const dispatch = useAppDispatch()
  const sort = ['By name', 'By id', 'By email', 'By phone']

  const sorting = (el: string) => {
    console.log(el)
  }

  const signOut = () => {
    dispatch(removeUser())
  }

  return (
    <div className="bg-slate-200 flex flex-wrap fixed w-24 h-screen sm:w-40 transition-all overflow-x-hidden">
      <div className="ml-2 sm:ml-4 transition-all">
        <p className="py-4 text-center font-sans font-medium cursor-default">Sorting</p>
        {sort.map((el, index) => (
          <button
            onClick={() => sorting(el)}
            className="mx-auto my-2 py-2 w-20 sm:w-32 transition-all flex justify-center bg-white hover:bg-green-100"
            key={el + index}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="flex items-end ml-2 sm:ml-4 transition-all">
        <button
          onClick={() => signOut()}
          className="h-10 mx-auto my-4 py-2 w-20 sm:w-32 transition-all bg-white hover:bg-green-100 font-mono font-semibold"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}

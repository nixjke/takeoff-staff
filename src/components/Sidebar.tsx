import React from 'react'

export default function Sidebar() {
  const sort = ['By name', 'By id', 'By email', 'By phone']

  const click = (el: string) => {
    console.log(el)
  }

  return (
    <div className="bg-slate-200 block fixed w-24 h-screen sm:w-40 transition-all overflow-x-hidden">
      <p className="py-4 text-center font-sans font-medium">Sorting</p>
      {sort.map((el, index) => (
        <button
          onClick={() => click(el)}
          className="mx-auto my-2 py-2 w-20 sm:w-32 transition-all flex justify-center bg-white hover:bg-green-100"
          key={el + index}
        >
          {el}
        </button>
      ))}
    </div>
  )
}

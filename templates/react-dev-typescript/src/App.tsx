import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-800">
      <img src="https://raw.githubusercontent.com/Sharmaz/enchilada/refs/heads/main/media/enchilada-js-logo.svg" width="250" alt="enchiladajs logo"/>
      <div className="p-8">
        <button
          className="bg-neutral-900 px-4 py-2 rounded-lg text-slate-200 w-[160px] border-1 border-transparent hover:border-[#FF9811] transition-colors duration-250 cursor-pointer"
          onClick={() => setCount((counter) => counter + 1)}
          type="button"
        >
          {`Enchiladas ${count}`}
        </button>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <img src="https://raw.githubusercontent.com/Sharmaz/enchilada/refs/heads/main/media/enchilada-js-logo.svg" width="250" alt="enchiladajs logo"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Enchiladas {count}
        </button>
      </div>
    </div>
  )
}

export default App

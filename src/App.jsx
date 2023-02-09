import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countSad, setCountSad] = useState(0)

  return (
    <div className="App">
      <h1>Are you happy with your habits?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Yeah, I'm on fire {count}
        </button>
        <button onClick={() => setCountSad((countSad) => countSad - 1)}>
          No, I'm sad {countSad}
        </button>
      </div>
    </div>
  )
}

export default App

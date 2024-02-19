import { useState } from 'react'

import './App.css'
import Items from './components/items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Items />
    </div>
    </>
  )
}

export default App


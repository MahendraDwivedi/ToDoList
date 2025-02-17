import { useState } from 'react'

import './App.css'
import { ToDo } from './ToDo/todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <ToDo/>
    </section>
  )
}

export default App

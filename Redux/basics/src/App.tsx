import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[800px] mx-auto h-screen p-10 bg-gray-100'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-semibold'>
        Simple Counter
      </h1>
      <div>
 <Counter></Counter>
      </div>
    </div>
    </>
  )
}

export default App

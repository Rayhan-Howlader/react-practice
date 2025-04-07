// import { useState } from 'react'
import './App.css'
import Blogs from './components/Nabvar/Blogs/Blogs'
import Navbar from './components/Nabvar/Blogs/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: 0</h1>
          <h1>Bookmarked count : 0</h1>
        </div>
      </div>
    </>
  )
}

export default App

// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Blogs from './components/Nabvar/Blogs/Blogs'
import Navbar from './components/Nabvar/Blogs/Navbar'

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount,setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked,blog])
    console.log(bookmarked);
  }

  const handleMarkAsRead = (time,id) => {
    const newTime =readingCount + time;
    setReadingCount(newTime);
    handleRemoveFromBookMark(id)
  }

  const handleRemoveFromBookMark = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookMark);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: {readingCount}</h1>
          <h1>Bookmarked count : {bookmarked.length}</h1>

           {
            bookmarked.map((marked) => <p className='bg-red-500 p-2 shadow m-2 text-white'>{marked.title}</p>)
           }
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log(blog.reading_time)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

    // Processing the reading time
    const {reading_time} = blog;
    const splitTime = reading_time.split(' ');
    const timeString = splitTime[0]; 
    const time = parseInt(timeString);

    // set the reading time
    const newTime = readingTime + time;
    setReadingTime(newTime);
  };

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App

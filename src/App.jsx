import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log(id)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

    // Processing the reading time
    const { reading_time } = blog;
    const splitTime = reading_time.split(' ');
    const timeString = splitTime[0];
    const time = parseInt(timeString);

    // set the reading time
    const newTime = readingTime + time;
    setReadingTime(newTime);
  };

  const handleUnmarked = (id) => { 
    console.log('id added', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleUnmarked={handleUnmarked}></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} handleUnmarked={handleUnmarked}></Bookmarks>
      </div>
    </>
  )
}

export default App

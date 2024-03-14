import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
// import ReadingTime from '../ReadingTime/ReadingTime';

const Bookmarks = ({ bookmarks, readingTime, handleUnmarked }) => {
    // console.log(handleUnmarked);
    return (
        <div className="md:w-1/3 ml-5 py-2 space-y-5">
            <div className='bg-[#1111110d] rounded-2xl'>

                <p className='text-2xl font-bold text-blue-600 p-3 ml-5'>
                    Spent time on read : {readingTime}
                </p>

            </div>

            <div className='bg-[#1111110d] rounded-2xl py-3'>
                <h5 className='text-2xl font-bold text-start ml-6'>Bookmarked Blogs: {bookmarks.length}</h5>

                <div>
                    {
                        bookmarks.map((bookmark, i) => (
                            <Bookmark key={i} bookmark={bookmark} handleUnmarked={handleUnmarked}></Bookmark>
                        ))
                    }
                    {
                        // <Bookmark handleUnmarked={handleUnmarked}></Bookmark>
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;
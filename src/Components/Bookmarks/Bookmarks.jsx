import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-[#1111110d] ml-5 py-2 rounded-2xl">
            <h5 className='text-2xl font-bold text-end mr-5'>Bookmarks: {bookmarks.length}</h5>

            <div>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
};

export default Bookmarks;
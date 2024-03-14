import PropTypes from 'prop-types';

const Bookmark = ({ bookmark, handleUnmarked }) => {
    // console.log(bookmark)
    const { title } = bookmark;
    return (
        <div className='bg-white p-5 m-5 rounded-2xl'>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <button
                onClick={() => handleUnmarked(bookmark.id)}
                className='underline text-red-400 mt-3'>Unmarked
            </button>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;
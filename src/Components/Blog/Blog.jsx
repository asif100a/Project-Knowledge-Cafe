import PropTypes from 'prop-types';
import bookmarkIcon from '../../assets/images/bookmark icon.png';
import { HiOutlineBookmark } from "react-icons/hi";

const Blog = ({ blog, handleAddToBookmark, handleUnmarked }) => {
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mt-7 mb-8'>
            <img className='w-[845px] h-[450px] mb-8' src={cover} alt={`Cover Imag of ${title}`} />
            <div className='flex justify-between mt-5'>
                <div className='flex gap-4 mb-4'>
                    <img className='w-16 h-auto' src={author_img} alt="author image" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p>{reading_time}</p>
                    <img onClick={() => {handleAddToBookmark(blog); handleUnmarked}} className='w-6 h-6' src={bookmarkIcon} alt="bookmark" />
                </div>
            </div>
            <h1 className='text-4xl font-semibold text-[#1d1d1d]'>{title}</h1>
            <p className='mt-4 mb-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-3 text-[#1d1d1d] opacity-60'><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => {handleAddToBookmark(blog); handleUnmarked}}
                className='flex justify-center items-center gap-1 border-b-2 border-green-500'>
                <span className='text-green-600'>Mark as read </span>
                <span className='text-green-500'><HiOutlineBookmark></HiOutlineBookmark></span>
            </button>
            <hr className='mt-6' />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleUnmarked: PropTypes.func.isRequired
};

export default Blog;
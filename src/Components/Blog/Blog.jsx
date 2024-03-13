import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover Imag of ${title}`} />
            <h1>Blog: {title}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;
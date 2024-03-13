import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between py-4 my-4 border-b-2'>
            <h1 className='text-4xl font-bold text-[#1d1d1d]'>React Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;
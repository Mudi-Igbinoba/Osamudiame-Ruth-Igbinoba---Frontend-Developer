import Logo from '../assets/img/logo.png';

const Nav = () => {
    return (
        <nav className='xl:py-8 sm:py-5 py-4'>
            <ul className=''>
                <li>
                    <a href='/'>
                        <img
                            src={Logo}
                            alt='SpaceX Logo'
                            className='sm:w-1/4 w-2/5 mx-auto'
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

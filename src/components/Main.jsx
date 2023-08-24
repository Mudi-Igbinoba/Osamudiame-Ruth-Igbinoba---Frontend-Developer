import SearchForm from './SearchForm';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
const Main = () => {
    return (
        <main
            className='h-screen text-white bg-gradient-to-b from-zinc-900 to-gray-950'
            id='capsules'>
            <div className='h-full container sm:px-5 px-3 sm:py-8 py-5 mx-auto'>
                <h2 className='font-orbitron md:text-3xl sm:text-2xl mb-5 text-center'>
                    Unveil the Secrets: Search for Capsules{' '}
                    <BsFillRocketTakeoffFill className='inline ml-2 animate-pulse' />
                </h2>

                <SearchForm />
            </div>
        </main>
    );
};

export default Main;

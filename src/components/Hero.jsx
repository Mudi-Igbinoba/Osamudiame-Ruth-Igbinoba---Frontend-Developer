import Nav from './Nav';
import rocketHero from '../assets/img/rocket-hero.jpg';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Hero = () => {
    return (
        <div
            className='h-screen text-white bg-top bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(${rocketHero})` }}>
            <header className='container sm:px-5 px-3 mx-auto h-full flex flex-col'>
                <Nav />

                <section className='mt-[30vh] flex lg:flex-row flex-col lg:justify-between justify-normal'>
                    <h1 className='font-orbitron xl:w-[45%] lg:w-1/2 mb-5 xl:text-5xl sm:text-4xl text-2xl font-semibold'>
                        Welcome to SpaceX Data Hub
                    </h1>
                    <p className='lg:text-lg sm:text-base text-sm xl:w-[45%] lg:w-1/2'>
                        Explore the cutting-edge world of space travel with our
                        SpaceX Data Explorer app. Immerse yourself in the
                        awe-inspiring realm of advanced capsules and spacecraft
                        designed, manufactured, and launched by SpaceX.{' '}
                    </p>
                </section>

                <a href='#capsules' className='mt-auto mx-auto mb-4'>
                    <BsFillArrowDownCircleFill className='animate-bounce text-3xl text-black' />
                </a>
            </header>
        </div>
    );
};

export default Hero;

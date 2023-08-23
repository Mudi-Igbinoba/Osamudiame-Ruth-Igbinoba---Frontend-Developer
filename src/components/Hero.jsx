import Nav from './Nav';
import rocketHero from '../assets/img/rocket-hero.jpg';

const Hero = () => {
    return (
        <div
            className='h-screen text-white bg-top bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(${rocketHero})` }}>
            <header className='container mx-auto'>
                <Nav />
            </header>
        </div>
    );
};

export default Hero;

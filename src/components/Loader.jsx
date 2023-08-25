import load from '../assets/img/space-loader.gif';

const Loader = () => {
    return (
        <div className='mt-10'>
            <img src={load} alt='Loader' className='block mx-auto' />
        </div>
    );
};

export default Loader;

import { useState } from 'react';
import { SearchProvider } from './SearchContext';
import SearchForm from './SearchForm';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import DataGrid from './DataGrid';

const Capsules = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);

    return (
        <main
            className='text-white bg-gradient-to-b from-zinc-900 to-gray-950'
            id='capsules'>
            <div className='h-full container sm:px-5 px-3 sm:py-8 py-5 mx-auto'>
                <h2 className='font-orbitron font-semibold md:text-3xl sm:text-2xl mb-5 text-center'>
                    Unveil the Secrets: Search for Capsules{' '}
                    <BsFillRocketTakeoffFill className='inline ml-2 animate-pulse' />
                </h2>
                <SearchProvider>
                    <SearchForm
                        setData={setFetchedData}
                        setCurrentPage={setCurrentPage}
                        setLoading={setLoading}
                    />
                    <DataGrid
                        data={fetchedData}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        loading={loading}
                    />
                </SearchProvider>
            </div>
        </main>
    );
};

export default Capsules;

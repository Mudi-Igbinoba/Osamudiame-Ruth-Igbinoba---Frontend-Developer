import Moment from 'react-moment';
import stars from '../assets/img/stars.jpg';
import { useState } from 'react';
import CapsuleModal from './CapsuleModal';
import GridPaginate from './GridPaginate';
import Loader from './Loader';
import PropTypes from 'prop-types';

const DataGrid = ({ data, currentPage, setCurrentPage, loading }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <section
                    id='dataGrid'
                    className='mx-auto grid gap-8 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10'>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item) => (
                            <div
                                key={item.capsule_serial}
                                className='bg-slate-700 border-white border-[1px] p-5 h-[150px] rounded-lg  shadow-md bg-no-repeat bg-cover bg-center shadow-zinc-900 cursor-pointer hover:scale-105 duration-100'
                                style={{ backgroundImage: `url(${stars})` }}
                                onClick={() => handleItemClick(item)}>
                                <h3 className='font-orbitron text-xl mb-3'>
                                    Capsule - {item.capsule_serial}
                                </h3>
                                <p className='text-sm tracking-wider font-light'>
                                    {item.original_launch ? (
                                        <span>
                                            Launched on{' '}
                                            <Moment format='LLL'>
                                                {item.original_launch}
                                            </Moment>
                                        </span>
                                    ) : (
                                        'No available date'
                                    )}
                                </p>
                            </div>
                        ))
                    ) : (
                        <span className='text-center text-2xl font-orbitron'>
                            No Capsule Available
                        </span>
                    )}
                </section>
            )}

            <CapsuleModal
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />

            {paginatedData.length > 0 && (
                <GridPaginate
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
            )}
        </>
    );
};

DataGrid.propTypes = {
    data: PropTypes.array,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    loading: PropTypes.bool,
};

export default DataGrid;

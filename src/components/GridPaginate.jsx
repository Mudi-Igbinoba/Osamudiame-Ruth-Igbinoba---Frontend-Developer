import { BsRocketFill } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const GridPaginate = ({ totalPages, handlePageChange }) => {
    return (
        <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePageChange}
            className='flex font-orbitron font-bold text-lg justify-between items-center mx-auto border-white border-2 lg:w-1/3 md:w-2/5 sm:w-1/2 w-5/6 mt-10 rounded-lg px-5'
            pageClassName=''
            pageLinkClassName='h-full block py-4 px-10 hover:bg-slate-800 duration-100 cursor-pointer'
            nextLabel={
                <BsRocketFill className='rotate-90 hover:animate-spin' />
            }
            previousLabel={
                <BsRocketFill className='-rotate-90 hover:animate-spin' />
            }
            activeClassName='bg-slate-800'
        />
    );
};

GridPaginate.propTypes = {
    totalPages: PropTypes.number,
    handlePageChange: PropTypes.func,
};

export default GridPaginate;

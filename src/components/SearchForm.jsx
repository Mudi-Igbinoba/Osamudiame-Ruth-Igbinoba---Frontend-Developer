import { HiOutlineStatusOnline, HiOutlineClock } from 'react-icons/hi';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { useSearchContext } from './SearchContext';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ setData, setCurrentPage, setLoading }) => {
    const { searchFilters, setSearchFilters } = useSearchContext();

    const [formData, setFormData] = useState({
        status: searchFilters.status,
        landings: searchFilters.landings,
        type: searchFilters.type,
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSearchFilters(formData); // Update the context on form submit
        setFormData({
            status: '',
            landings: '',
            type: '',
        });
        setCurrentPage(0);
    };

    useEffect(() => {
        // Construct the query string based on selected filters
        const queryString = `https://api.spacexdata.com/v3/capsules?status=${searchFilters.status}&landings=${searchFilters.landings}&type=${searchFilters.type}`;

        // Fetch data from SpaceX API
        fetch(queryString)
            .then((response) => response.json())
            .then((data) => {
                // Handle fetched data
                setData(data);
            })
            .catch((error) => {
                // Handle errors
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, [searchFilters, setData, setLoading]);

    return (
        <section className='py-5'>
            <form
                className='text-center grid gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:text-base text-sm'
                onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor='status'
                        className='uppercase tracking-widest'>
                        Status
                        <HiOutlineStatusOnline className='inline ml-2 mb-1 text-white animate-spin' />
                    </label>
                    <br />
                    <select
                        className='mt-2.5 text-black py-2 px-3 rounded-lg'
                        name='status'
                        onChange={handleFormChange}
                        id='status'
                        value={formData.status}>
                        <option value='' disabled>
                            Select Status
                        </option>
                        <option value='active'>Active</option>
                        <option value='retired'>Retired</option>
                        <option value='unknown'>Unknown</option>
                        <option value='destroyed'>Destroyed</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor='landings'
                        className='uppercase tracking-widest'>
                        Landings
                        <HiOutlineClock className='inline ml-2 mb-1 text-white animate-spin' />
                    </label>
                    <br />
                    <select
                        className='mt-2.5 text-black py-2 px-3 rounded-lg'
                        name='landings'
                        onChange={handleFormChange}
                        id='landings'
                        value={formData.landings}>
                        <option value='' disabled>
                            Select Landings
                        </option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='type' className='uppercase tracking-widest'>
                        Type
                        <VscTypeHierarchySub className='inline ml-2 mb-1 text-white animate-spin' />
                    </label>
                    <br />
                    <select
                        className='mt-2.5 text-black py-2 px-3 rounded-lg'
                        name='type'
                        onChange={handleFormChange}
                        id='type'
                        value={formData.type}>
                        <option value='' disabled>
                            Select Type
                        </option>
                        <option value='Dragon 1.0'>Dragon 1.0</option>
                        <option value='Dragon 1.1'>Dragon 1.1</option>
                        <option value='Dragon 2.0'>Dragon 2.0</option>
                    </select>
                </div>

                <button
                    type='submit'
                    className='duration-100 sm:mt-auto mt-5 mx-auto px-10 py-3 rounded-lg border-4 border-white hover:border-slate-500 hover:bg-slate-500 '>
                    Submit
                </button>
            </form>
        </section>
    );
};

SearchForm.propTypes = {
    setData: PropTypes.func,
    setCurrentPage: PropTypes.func,
    setLoading: PropTypes.func,
};
export default SearchForm;

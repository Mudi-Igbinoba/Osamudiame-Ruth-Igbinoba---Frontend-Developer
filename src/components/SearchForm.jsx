import { HiOutlineStatusOnline, HiOutlineClock } from 'react-icons/hi';
import { VscTypeHierarchySub } from 'react-icons/vsc';

const SearchForm = () => {
    return (
        <section className='py-5'>
            <form className='text-center grid gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:text-base text-sm'>
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
                        id='status'>
                        <option value='' disabled selected>
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
                        htmlFor='launch'
                        className='uppercase tracking-widest'>
                        Original Launch
                        <HiOutlineClock className='inline ml-2 mb-1 text-white animate-spin' />
                    </label>
                    <br />
                    <select
                        className='mt-2.5 text-black py-2 px-3 rounded-lg'
                        name='launch'
                        id='launch'>
                        <option value='' disabled selected>
                            Select a year
                        </option>
                        <option value='2010'>2010</option>
                        <option value='2012'>2012</option>
                        <option value='2013'>2013</option>
                        <option value='2014'>2014</option>
                        <option value='2015'>2015</option>
                        <option value='2016'>2016</option>
                        <option value='2017'>2017</option>
                        <option value='2019'>2019</option>
                        <option value='2020'>2020</option>
                        <option value='null'>Null</option>
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
                        id='type'>
                        <option value='' disabled selected>
                            Select a type
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

export default SearchForm;

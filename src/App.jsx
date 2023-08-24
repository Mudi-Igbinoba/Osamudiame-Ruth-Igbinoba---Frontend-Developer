import './App.css';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';

function App() {
    return (
        <div className='font-robotoSlab'>
            <Hero />
            <main>
                <SearchForm />
            </main>
        </div>
    );
}

export default App;

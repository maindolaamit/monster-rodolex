import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box'
import { useState } from 'react';

const App = () => {

  const [searchField, setSearchField] = useState('');

  const searchHandler = (e) => {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className='app'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      {/* <SearchBox className='search-box' onChangeHandler={searchHandler} placeholder='search monsters' /> */}
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box'
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [searchField, setSearchField] = useState(''); // value, setValue
  const [monsters, setMonsters] = useState([]);
  // use another filter to filter monsters, no need to load data again
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('rendering');

  // call the api to get list of monsters only once when the component is mounted
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setMonsters(response.data)
        console.log('Fetching data from API ...' + response.data.length);
      });
  }, []);

  useEffect(() => {
    setFilteredMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(searchField)));
    console.log('setting filtered monsters : ' + filteredMonsters.length);
  }, [searchField]);

  const searchHandler = (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    setSearchField(searchString);
  };

  return (
    <div className='app'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' onChangeHandler={searchHandler} placeholder='search monsters' />
    </div>
  );
};

export default App;

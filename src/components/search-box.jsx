import './search-box.style.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
    return <input className="search-box"
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
};

export default SearchBox;
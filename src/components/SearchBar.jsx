import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ setInputValue }) {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value);
    navigate(`/${inputRef.current.value}`);
    inputRef.current.value = '';
  };

  return (
    <form>
      <input type='text' name='search' ref={inputRef} />

      <button onClick={handleSearch}>
        <img src='https://media.istockphoto.com/id/1395012660/vector/search-icon-vector-magnifying-glass-with-transparent-background-magnifier-loupe-tool.jpg?s=612x612&w=0&k=20&c=2XdjlBNCadHUTTPOX6sP4tLlPva9nPkF_6BXSKqgVH4=' />
      </button>
    </form>
  );
}

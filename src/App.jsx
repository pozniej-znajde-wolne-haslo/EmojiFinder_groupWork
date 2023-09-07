import { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import Btns from './components/Btns';
import ImageContainer from './components/ImageContainer';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [btnKeyword, setBtnKeyword] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('emoji.json');

      if (response.ok === true) {
        const data = await response.json();
        setPhotos(data);
      } else {
        let error = new Error('Sth went wrong');
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <h1>
        <NavLink to='/'>EmojiFinder</NavLink>
      </h1>

      <SearchBar setInputValue={setInputValue} />
      <Btns setBtnKeyword={setBtnKeyword} />

      <Routes>
        <Route path='/' element={<Home photos={photos.slice(20, 70)} />} />
        <Route
          path='/:emoji'
          element={
            <ImageContainer
              photos={photos}
              inputValue={inputValue}
              btnKeyword={btnKeyword}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

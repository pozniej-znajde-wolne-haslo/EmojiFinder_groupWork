import SingleImage from './SingleImage';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function ImageContainer({ inputValue, btnKeyword, photos }) {
  const navigate = useNavigate();

  let filteredData = [];

  if (inputValue !== '') {
    filteredData = photos.filter((photo) => photo.keywords.match(inputValue));
  } else if (btnKeyword !== '') {
    filteredData = photos.filter((photo) => photo.keywords.match(btnKeyword));
  } else {
    filteredData = photos.slice(0, 60);
    navigate('/');
  }

  return (
    <div className='emojis-container'>
      {filteredData.map((photo) => {
        return <SingleImage key={uuidv4()} photo={photo} />;
      })}
    </div>
  );
}

/* u could use 'useParams()' instead here !! */

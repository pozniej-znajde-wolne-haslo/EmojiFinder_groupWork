import SingleImage from './SingleImage';
import { v4 as uuidv4 } from 'uuid';

export default function Home({ photos }) {
  return (
    <div className='emojis-container'>
      {photos.map((photo) => (
        <SingleImage key={uuidv4()} photo={photo} />
      ))}
    </div>
  );
}

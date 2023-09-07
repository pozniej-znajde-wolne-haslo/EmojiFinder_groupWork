import SingleBtn from './SingleBtn';
import { v4 as uuidv4 } from 'uuid';

export default function Btns({ setBtnKeyword }) {
  const searchOptions = [
    { name: 'sad' },
    { name: 'sleep' },
    { name: 'tired' },
    { name: 'happy' },
  ];

  return (
    <div className='btn-container'>
      {searchOptions.map((option) => {
        return (
          <SingleBtn
            key={uuidv4()}
            option={option}
            setBtnKeyword={setBtnKeyword}
          />
        );
      })}
    </div>
  );
}

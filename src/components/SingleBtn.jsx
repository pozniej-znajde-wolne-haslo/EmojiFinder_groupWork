import { NavLink } from 'react-router-dom';

export default function SingleBtn({ option, setBtnKeyword }) {
  return (
    <NavLink to={`/${option.name}`} onClick={() => setBtnKeyword(option.name)}>
      {option.name}
    </NavLink>
  );
}

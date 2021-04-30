import { Link } from 'react-router';

function Navbar() {
  return (
    <div>
      <Link to="/">Count </Link>
      <Link to="/,">Employees </Link>
    </div>
  );
}

export default Navbar;

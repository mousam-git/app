import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link style={{ textDecoration: 'none', color: '#eeeeee' }} to="/">
            Count{' '}
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#eeeeee' }} to="/emp">
            Employees{' '}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

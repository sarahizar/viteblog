import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', text: 'About Me' },
  { path: '/Portfolio', text: 'Portfolio' },
  { path: '/Contact', text: 'Contact' },
  { path: '/Resume', text: 'Resume' }
];

export default function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Sara McCauley</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-tabs">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <Link to={link.path} className={`nav-link ${currentPage === link.path ? 'active' : ''}`}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
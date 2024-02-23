import PropTypes from 'prop-types';

export default function Header({ currentSection, handleNavigationClick }) {
  return (
    <header className="header">
      <h1>Sara McCauley</h1>
      <h2>Portfolio</h2>
      <nav>
        <ul>
          {['About Me', 'Portfolio', 'Contact', 'Resume'].map(section => (
            <li
              key={section}
              className={currentSection === section ? 'active' : ''}
              onClick={() => handleNavigationClick(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  currentSection: PropTypes.string.isRequired,
  handleNavigationClick: PropTypes.func.isRequired,
};
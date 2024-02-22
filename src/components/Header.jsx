import PropTypes from 'prop-types';
export default function Header({ currentSection, handleNavigationClick }) {
    
  return (
    <header className="header">
      <h1>Sara McCauley</h1>
      <h2> Portfolio</h2>
      <nav>
        <ul>
          <li className={currentSection === 'About Me' ? 'active' : ''} onClick={() => handleNavigationClick('About Me')}>About Me</li>
          <li className={currentSection === 'Portfolio' ? 'active' : ''} onClick={() => handleNavigationClick('Portfolio')}>Portfolio</li>
          <li className={currentSection === 'Contact' ? 'active' : ''} onClick={() => handleNavigationClick('Contact')}>Contact</li>
          <li className={currentSection === 'Resume' ? 'active' : ''} onClick={() => handleNavigationClick('Resume')}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  currentSection: PropTypes.string.isRequired,
  handleNavigationClick: PropTypes.func.isRequired
};
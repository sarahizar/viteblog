import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaReact, FaGit } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMicrosoftexcel } from 'react-icons/si';

export default function Resume() {
  const proficiencies = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Python (Learning)', icon: FaPython },
    { name: 'C# (Learning)', icon: null },
    { name: 'Web APIs', icon: null },
    { name: 'Third Party APIs', icon: null },
    { name: 'Server Side APIs', icon: null },
    { name: 'NodeJS', icon: FaNodeJs },
    { name: 'Object-Relational Mapping', icon: null },
    { name: 'Model-Viewer-Controller', icon: null },
    { name: 'Express', icon: SiExpress },
    { name: 'SQL', icon: null },
    { name: 'NoSQL', icon: SiMongodb },
    { name: 'Progressive Web Applications (PWA)', icon: null },
    { name: 'React', icon: FaReact },
    { name: 'MERN Stack', icon: null },
    { name: 'Git', icon: FaGit },
    { name: 'Microsoft Azure', icon: null },
    { name: 'Excel', icon: SiMicrosoftexcel }
  ];

  const otherSkills = [
    'Communication',
    'Problem-solving',
    'Teamwork',
    'Time management',
    'Leadership',
    'Creativity',
    'Conflict Resolution',
    'Customer Service',
    'Networking',
    'Continuous Learning'
  ];

  return (
    <section className="resume">
      <h2 className="resume-header">Resume</h2>
      <div className="resume-content">
        <div className="resume-section">
          <h3 className= "download">Download Resume</h3>
          <a href="src\assets\Sara_Resume.updated.pdf" download>Download Resume</a>
        </div>
      </div>
      <div className="resume-section">
        <h3 className="skills">My technical skills include:</h3>
        <div className="skills-grid">
          {proficiencies.map((proficiency, index) => (
            <div key={index} className="skill">
              {proficiency.icon && <proficiency.icon className="skill-icon" />}
              <span>{proficiency.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="resume-section">
        <h3 className="other-skills">Other Skills:</h3>
        <ul>
          {otherSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
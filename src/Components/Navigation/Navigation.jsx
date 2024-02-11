import './Navigation.scss';

function Navigation({ className }) {
  const scrollToSection = (sectionName) => {
    const section = document.querySelector(sectionName);
    if (section) {
      const topOffset = section.offsetTop - 200;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };
  return (
    <div className="navigation-container">
      <ul className="navigation-container__links">
        <li>
          <button
            onClick={() => scrollToSection('#Home')}
            className={className}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('#BePartner')}
            className={className}
          >
            Be Partner
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('#Steps')}
            className={className}
          >
            Steps
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('#WhyChooseUs')}
            className={className}
          >
            Why choose us ?
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('#Partnership')}
            className={className}
          >
            Partnership
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('#Faq')} className={className}>
            FAQ
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

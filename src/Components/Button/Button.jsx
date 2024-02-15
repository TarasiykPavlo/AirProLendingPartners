import './Button.scss';
import { Link } from 'react-router-dom';
function Button({ children, className }) {
  return (
    <Link to="/Auth">
      <button className={`button ${className}`}>{children}</button>
    </Link>
  );
}

export default Button;

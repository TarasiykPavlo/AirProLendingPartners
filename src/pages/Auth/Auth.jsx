import Signup from './Signup';
import Login from './Login';
import './Auth.scss';
import { Button } from 'antd';
export default function Auth(params) {
  const isActive = false;
  return (
    <div className="Auth">
      <div className={`auth__container ${isActive ? 'auth__active' : ''}`}>
        <Login className="form-container sign-in">
          <h1>Create Account</h1>

          <div className="auth__social-icons">
            <a href="#" className="auth__icon">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className="auth__icon" disabled>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>

          <span>or use your email for registration</span>
        </Login>
        <Signup className="form-container sign-up">
          <h1>Sign In</h1>

          <div className="auth__social-icons">
            <a href="#" className="auth__icon">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className="auth__icon" disabled>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>

          <span>or use your email password</span>
        </Signup>
        <div className="auth__toggle-container">
          <div className="auth__toggle">
            <div className="auth__toggle-panel auth__toggle-left">
              <h1>Welcome, Friend!</h1>
              <p>Enter your card details to use all of site features</p>
              <Button
                ghost
                type="default"
                shape="round"
                className={`auth__button--toggle auth__hidden ${
                  isActive ? '' : 'auth__active'
                }`}
              >
                Log In
              </Button>
            </div>

            <div className="auth__toggle-panel auth__toggle-right">
              <h1>Welcome Back!</h1>
              <p>Enter your card details to use all of site features</p>
              <Button
                ghost
                type="default"
                shape="round"
                className={`auth__button--toggle auth__hidden ${
                  isActive ? 'auth__active' : ''
                }`}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

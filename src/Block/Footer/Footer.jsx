import './Footer.scss';
import imageLogo from '../../assets/img/Logo.svg';
import imageTelegram from '../../assets/img/LogoTelegram.svg';
import imageInstagram from '../../assets/img/LogoInstagram.svg';
import imageFacebook from '../../assets/img/LogoFacebook.svg';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__section">
        <div className="footer-container__header">
          <h2>AiPro</h2>
          <img className="footer__logo-img" src={imageLogo} alt="Logo" />
          <div className="footer-container__social">
            <img
              src={imageTelegram}
              alt="social"
              className="footer-container__social-tg"
            />
            <img
              src={imageFacebook}
              alt="social"
              className="footer-container__social-fc"
            />
            <img
              src={imageInstagram}
              alt="social"
              className="footer-container__social-inst"
            />
          </div>
        </div>
        <ul className="footer-container__header-links">
          <li>
            <a href="#">Partnership agreement</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
        </ul>
        <ul className="footer-container__header-links">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
        <ul className="footer-container__header-links">
          <li>
            <p>Our contacts</p>
          </li>
          <li>
            <a href="#">Facebook: aipro_official</a>
          </li>
          <li>
            <a href="#">Telegram: @aipro.partners</a>
          </li>
          <li>
            <a href="#">Instagram: @aipro.official</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <footer className="footer-container__content">
        <div className="footer__logo">
          <div className="footer-container__head">
            <h2>AiPro</h2>
            <img className="footer__logo-img" src={imageLogo} alt="Logo" />
          </div>
          <div className="footer-link">
            <img src={imageTelegram} alt="link" />
            <img src={imageFacebook} alt="link" />
            <img src={imageInstagram} alt="link" />
          </div>
        </div>
        <div className="footer__second">
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href="">Partnership agreement</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <div className="footer__third">

        </div>
        <div className="footer__fourth">

        </div>
      </footer> */
}

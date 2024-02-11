import './AlwaysInTouch.scss';
import email from '../../assets/img/Email.svg';
import telegram from '../../assets/img/Telegram.svg';
import facebook from '../../assets/img/Facebook.svg';

export default function AlwaysInTouch() {
  return (
    <div>
      <div className="AlwaysInTouch" id="Faq">
        <h2 className="AlwaysInTouchH">ALWAYS IN TOUCH</h2>
        <div className="boxButtonMain">
          <div className="boxButtonMain-email">
            <a className="boxButton box1" href="#">
              <img src={email} alt="" />
              aipro@gmail.com
            </a>
          </div>
          <div className="boxButtonMain-tg">
            <a className="boxButton box2" href="#">
              <img src={telegram} alt="" />
              @aipro_partners
            </a>
          </div>
          <div className="boxButtonMain-facebook"></div>

          <a className="boxButton box3" href="#">
            <img src={facebook} alt="" />
            aipro_official
          </a>
        </div>
      </div>
    </div>
  );
}

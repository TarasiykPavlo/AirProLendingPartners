import './HowToStart.scss';
import account from '../../assets/img/Account.svg';
import link from '../../assets/img/Link.svg';
import graph from '../../assets/img/Graph.svg';
import wallet from '../../assets/img/Wallet.svg';

function HowToStart() {
  return (
    <div className="toStart-container">
      <h2 className="toStart-header">How to start?</h2>

      <div className="toStart__elements">
        <div className="toStart__elements-account">
          <img src={account} alt="" className="icon" />
          <div className="toStart__elements-wrapper">
            <p className="toStart__elements-num">1</p>
          </div>
          <p className="toStart__elements-caption">Sign up into AIPRO</p>
          {/* <p className="toStart__elements-caption"></p> */}
        </div>

        <div className="toStart__elements-link">
          <img src={link} alt="" className="icon" />
          <div className="toStart__elements-wrapper">
            <p className="toStart__elements-num">2</p>
          </div>
          <p className="toStart__elements-caption">
            Copy your unique referral link
          </p>
        </div>

        <div className="toStart__elements-graph">
          <img src={graph} alt="" className="icon" />
          <div className="toStart__elements-wrapper">
            <p className="toStart__elements-num">3</p>
          </div>
          <p className="toStart__elements-caption">
            Attract new partners to your team
          </p>
        </div>

        <div className="toStart__elements-wallet">
          <img src={wallet} alt="" className="icon" />
          <div className="toStart__elements-wrapper">
            <p className="toStart__elements-wallet__num">4</p>
          </div>
          <p className="toStart__elements-caption">Receive weekly payments</p>
        </div>
      </div>
    </div>
  );
}

export default HowToStart;

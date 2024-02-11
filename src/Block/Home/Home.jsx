import Button from '../../Components/Button/Button';
import home_logo from '../../assets/img/Home.svg';
import './Home.scss';

function Home() {
  return (
    <div className="home" id="Home">
      <div className="home__header">
        <p>
          An affiliate program that
          <span style={{ color: '#E61685' }}> everyone</span> can use
        </p>
        <div className="home_description">
          <p>Make a profit from traffic!</p>
          <p>
            Attract clients to the platform, and we will provide all the
            necessary tools for your growth
          </p>
        </div>

        <Button className={'home_description-btn'}>Sign Up</Button>
      </div>

      <div className="home__member">
        <img src={home_logo} alt="" className="home__member-logo" />
        <div className="home__member-revenue">
          <p className="home__member-text">Up to</p>
          <p className="home__member-text">+70%</p>
          <p className="home__member-text">of revenue*</p>
        </div>
        <p className="home__member-description">
          Earn together with the best AiPro products
        </p>
      </div>
    </div>
  );
}

export default Home;

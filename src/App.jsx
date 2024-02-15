import Wave from './Components/Wave/Wave';
import Audience from '../src/Block/Audience/Audience';
import Home from '../src/Block/Home/Home';
import UpperBenefit from '../src/Block/UpperBenefit/UpperBenefit';
import Footer from '../src/Block/Footer/Footer';
import TopList from '../src/Block/TopList/TopList';
import Steps from '../src/Block/Steps/Steps';
import HowToStart from '../src/Block/HowToStart/HowToStart';
import LowerBenefit from '../src/Block/LowerBenefit/LowerBenefit';
import AlwaysInTouch from '../src/Block/AlwaysInTouch/AlwaysInTouch';
import StartEarn from '../src/Block/StartEarn/StartEarn';
import Header from '../src/Block/Header/Header';
import PartnerShip from '../src/Block/Partnership/PartnerShip';
import Auth from './pages/Auth/Auth';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <UpperBenefit />
      <Wave header={'Start earning today. Become a leader tomorrow!'} />
      <Audience id={'BePartner'} />
      <TopList />
      <Steps />
      <Wave header={'Join AIPRO!'} />
      <LowerBenefit />
      <HowToStart />
      <PartnerShip />
      <StartEarn />
      <AlwaysInTouch />
      <Footer />
    </div>
  );
}

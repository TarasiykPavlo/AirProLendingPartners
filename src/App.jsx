import Wave from './Components/Wave/Wave';
import Audience from './Block/Audience/Audience';
import Home from './Block/Home/Home';
import UpperBenefit from '../src/Block/UpperBenefit/UpperBenefit';
import Footer from './Block/Footer/Footer';
import TopList from './Block/TopList/TopList';
import Steps from './Block/Steps/Steps';
import HowToStart from './Block/HowToStart/HowToStart';
import LowerBenefit from './Block/LowerBenefit/LowerBenefit';
import AlwaysInTouch from './Block/AlwaysInTouch/AlwaysInTouch';
import StartEarn from './Block/StartEarn/StartEarn';
import Header from './Block/Header/Header';
import PartnerShip from './Block/Partnership/PartnerShip';
import './App.scss';

export default function App() {
  return (
    <>
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
    </>
  );
}

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
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginAndSignUp from './pages/LoginAndSignUp/LoginAndSignUp';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginAndSignUp />}></Route>
          <Route path="signup" element={<LoginAndSignUp />}></Route>
        </Routes>
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
      </BrowserRouter>
    </QueryClientProvider>
  );
}

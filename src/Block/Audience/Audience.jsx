import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import AudienceBase from '../../Components/AudienceBase/AudienceBase';
import Audience1 from '../../assets/img/Audience1.svg';
import Audience2 from '../../assets/img/Audience2.svg';
import Audience3 from '../../assets/img/Audience3.svg';
import Audience4 from '../../assets/img/Audience4.svg';
import './Audience.scss';
export default function Audience({ id }) {
  const componentRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(componentRef.current, {
      opacity: 0.1,
      duration: 900,
      reset: true,
      delay: 200,
    });
  }, []);
  return (
    <div className="divAudience" id={id} ref={componentRef}>
      <h2 className="headerDivAudience">Who can be our partner?</h2>
      <p className="paragraphDivAudience">You can earn in any field</p>
      <div className="audience">
        <AudienceBase
          Image={Audience1}
          Header="Bloggers"
          BottomText="Everyone who works with social media audience"
        ></AudienceBase>
        <AudienceBase
          Image={Audience2}
          Header="Web-masters"
          BottomText="Everyone who creates content, works with websites and traffic"
        ></AudienceBase>
        <AudienceBase
          Image={Audience3}
          Header="Marketing agencies"
          BottomText="Everyone who works with advertisements and attracts clients"
        ></AudienceBase>
        <AudienceBase
          Image={Audience4}
          Header="Beginners"
          BottomText="Everyone who is interested in earnings and wants to start right now!"
        ></AudienceBase>
      </div>
    </div>
  );
}

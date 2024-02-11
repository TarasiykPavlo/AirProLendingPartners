import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './LowerBenefitPart.scss';
export default function LowerBenefitPart({ Paragraph, Header, Image }) {
  const componentRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(componentRef.current, {
      easing: 'ease-in-out',
      scale: 0.9,
      duration: 800,
      reset: true,
    });
  }, []);
  return (
    <div className="LowerBenefitPart" ref={componentRef}>
      <img className="LowerBenefitPartImg" src={Image} alt="Image" />
      <div className="LowerBenefitPartInside">
        <h2 className="LowerBenefitPartH">{Header}</h2>
        <p className="LowerBenefitPartP">{Paragraph}</p>
      </div>
    </div>
  );
}

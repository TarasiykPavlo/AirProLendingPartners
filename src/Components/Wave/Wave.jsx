import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './Wave.scss';
import Button from '../Button/Button';

export default function Wave({ header, style }) {
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
    <div className="WavePos" ref={componentRef}>
      <div className="waveMain">
        <h2 className="waveMainHeader" style={style}>
          {header}
        </h2>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './TopListitem.scss';

function TopListItem({ icon, profit, registrations, sales }) {
  const componentRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(componentRef.current, {
      rotate: {
        x: 45,
        y: 180,
        z: 0,
      },
      duration: 1200,
      reset: true,
      delay: 200,
    });
  }, []);
  return (
    <div className="list-item-container" ref={componentRef}>
      <div className="list-item-container__characteristics">
        <img src={icon} alt="" />
        <div className="list-item-container__characteristics-profit">
          <h2>Profit</h2>
          <p className="profit">${profit}</p>
        </div>
      </div>
      <div className="list-item-container__registrations">
        <h2>Registrations</h2>
        <p>{registrations}</p>
      </div>
      <div className="list-item-container__sales">
        <h2>Sales</h2>
        <p>{sales}</p>
      </div>
    </div>
  );
}

export default TopListItem;

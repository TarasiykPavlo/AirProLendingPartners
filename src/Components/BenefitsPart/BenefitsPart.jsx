import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';

const StyledComponent = styled.span`
  width: 8px;
  height: 8px;
  background: rgb(230, 22, 133);
  margin: 20px 0;
  @media screen and (max-width: 768px) {
    width: 8px; /* Adjusted width for mobile */
    height: 8px; /* Adjusted height for mobile */
    margin: 10px 0; /* Adjusted margin for mobile */
`;
const StyledDiv = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: auto; /* Adjusted height for mobile */
    padding-top: 50px;
  }
`;
const StyledPUpper = styled.p`
  color: rgb(255, 255, 255);
  font-family: Nunito Sans;
  font-size: 36px;
  font-weight: 900;
  line-height: 44px;
  letter-spacing: 0%;
  text-align: center;
  // @media screen and (max-width: 768px) {
  //   font-size: 30px; /* Adjusted font size for mobile */
  //   line-height: 40px; /* Adjusted line height for mobile */
`;
const StyledPUnder = styled.p`
  color: rgb(255, 255, 255);
  font-family: Nunito Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  // @media screen and (max-width: 768px) {
  //   font-size: 14px; /* Adjusted font size for mobile */
  //   line-height: 20px; /* Adjusted line height for mobile */
`;

export default function BenefitsPart({ upperText, underText }) {
  const componentRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(componentRef.current, {
      duration: 800,
      distance: '100px',
      origin: 'bottom',
      reset: true,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 1, 1)',
    });
  }, []);

  return (
    <StyledDiv ref={componentRef}>
      <StyledPUpper>{upperText}</StyledPUpper>
      <StyledComponent />

      <StyledPUnder>{underText}</StyledPUnder>
    </StyledDiv>
  );
}

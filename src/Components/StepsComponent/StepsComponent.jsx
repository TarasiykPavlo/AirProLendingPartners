import './StepsComponent.scss';

function StepsComponent({
  challengeNum,
  challengeHeader,
  subscribe,
  solution,
  className,
  img,
  changeMargin,
}) {
  return (
    <div className={`steps-container-section ${className}`}>
      <div className="steps-container__section-img">
        <img
          className="steps-container__section-img-img"
          src={img}
          alt="step1_img"
        />
      </div>

      <div className={`steps-container-section__challenge ${changeMargin}`}>
        <p className="steps-challenge">{challengeNum}</p>
        <p className={`steps-header`}>{challengeHeader}</p>
        <p className="steps-header"> Task</p>
        <p className="steps-subscribe">{subscribe}</p>
        <div className="steps-container-section__challenge-solution">
          <h2>Solution</h2>
          <p>{solution}</p>
        </div>
      </div>
    </div>
  );
}

export default StepsComponent;

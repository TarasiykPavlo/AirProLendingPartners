import StepsComponent from '../../Components/StepsComponent/StepsComponent';
import './Steps.scss';
import step1 from '../../assets/img/Step1.svg';
import step2 from '../../assets/img/Step2.svg';
import step3 from '../../assets/img/Step3.svg';

function Steps() {
  return (
    <div className="steps-container" id="Steps">
      <h2 className="steps-container__header">Growth without limits</h2>
      <p className="steps-container__paragraph">
        Take 3 steps to success with us
      </p>
      <StepsComponent
        changeMargin={'addMargin'}
        img={step1}
        challengeNum={'Challenge 1'}
        challengeHeader={'Increase your reach'}
        subscribe={
          'How to get subscribers? Where to attract traffic from? What content is relevant? Many beginners and experienced partners have similar questions.'
        }
        solution={
          'Our team help you find answers to all your questions. We follow trends and create detailed guides for working with audiences and content For a long time we have been helping partners achieve success and develop accounts on social networks from 0 to 100,000+ subscribers'
        }
      />
      <StepsComponent
        img={step2}
        className={'reverse'}
        challengeNum={'Challenge 2'}
        challengeHeader={'Increase your profits'}
        subscribe={
          'Your social media has started to grow, but your financial goals have not yet been achieved. We help accelerate your income growth with unique bonuses, promotions and competitions'
        }
        solution={
          'Our team takes into account your working style and finds an individual approach. We help with advertising, every month we hold promotions and competitions with a prize fund of up to $50,000 to make it easier for you to achieve your goals.'
        }
      />
      <StepsComponent
        img={step3}
        challengeNum={'Challenge 3'}
        challengeHeader={'Achieve more'}
        subscribe={
          'You are a successful and experienced partner in searching for new growth points. We tailor our bonuses, ideas and promotions to suit your needs'
        }
        solution={
          'Our team comes up with unique ways to promote. Together we think outside the box and test new formats: we help organize broadcasts, plan photo sessions and sponsor drawings of valuable prizes for your subscribers'
        }
        changeMargin={'addMargin'}
      />
    </div>
  );
}

export default Steps;

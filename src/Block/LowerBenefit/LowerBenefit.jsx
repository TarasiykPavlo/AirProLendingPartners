import LowerBenefitPart from '../../Components/LowerBenefitPart/LowerBenefitPart';
import LowerBenefit1 from '../../assets/img/LowerBenefits1.svg';
import LowerBenefit2 from '../../assets/img/LowerBenefits2.svg';
import LowerBenefit3 from '../../assets/img/LowerBenefits3.svg';
import LowerBenefit4 from '../../assets/img/LowerBenefits4.svg';
import './LowerBenefit.scss';
export default function LowerBenefit(params) {
  return (
    <div id="WhyChooseUs">
      <h2 className="lowerBenefirMain">Why choose AIPRO ?</h2>

      <div className="LowerBenefit">
        <div className="leftPart">
          <LowerBenefitPart
            Image={LowerBenefit1}
            Header={'Detailed statistics'}
            Paragraph={'Daily updated reports forprogress tracking'}
          />
          <LowerBenefitPart
            Image={LowerBenefit2}
            Header={'Personal manager'}
            Paragraph={'Professional help with any question'}
          />
        </div>
        <div className="rightPart">
          <LowerBenefitPart
            Image={LowerBenefit3}
            Header={'Unique promotional materials'}
            Paragraph={
              'Creative banners and landing pages to increase conversions'
            }
          />
          <LowerBenefitPart
            Image={LowerBenefit4}
            Header={'Promotions and competitions'}
            Paragraph={'Motivational contests, personal bonuses and promotions'}
          />
        </div>
      </div>
    </div>
  );
}

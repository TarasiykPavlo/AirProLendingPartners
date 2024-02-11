import styled from 'styled-components';
import './UpperBenefit.scss';
import BenefitsPart from '../../Components/BenefitsPart/BenefitsPart';

export default function UpperBenefit() {
  return (
    <div className="upper_benefit">
      <BenefitsPart upperText="164" underText="Countries for traffic" />
      <BenefitsPart upperText="$1,063,816" underText="Monthly benefits" />
      <BenefitsPart upperText="40+" underText="Methods for output" />
      <BenefitsPart upperText="69,896" underText="Registered partners" />
    </div>
  );
}

import './AudienceBase.css';
export default function AudienceBase({ Image, Header, BottomText }) {
  return (
    <div className="baseAudience">
      <img className="imgAudience" src={Image} alt="Audience Image" />
      <h1 className="headerAudience">{Header}</h1>
      <p className="pragraphAudience">{BottomText}</p>
    </div>
  );
}

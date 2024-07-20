import "./TrendyCardStyle.css"
import personIcon from "../../../public/images/personIcon.svg"
import calenderIcon from "../../../public/images/calenderIcon.svg"

function TrendyCard({ image, days, people, country, description, flag, rate }) {
  return (
    <div className="trendy-card">
      <img src={image} alt="country" />
      <div className="trendy-card-body">
        <img src={flag} alt="flag" id="flagIcon" />
        <div className="state">
          <div><img className="trendy-card-icon" src={calenderIcon} alt="personIcon" /> <span>{days}</span> <span>Days</span> </div>
          <div><img className="trendy-card-icon" src={personIcon} alt="personIcon" /> <span>{people}</span> <span>People Going</span> </div>
        </div>
        <div className="country">
          <h2>{country}</h2>
          <div className="stars-outer">
            <div className="stars-inner" style={{ width: rate }}></div>
          </div>
        </div>
        <p id="trendy-card-desc">{description}</p>
        <button>Explore Now</button>
      </div>

    </div>
  )
}

export default TrendyCard
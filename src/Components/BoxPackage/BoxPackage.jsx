import "./BoxPackageStyle.css"
import vectorstar from "../../../public/images/vector.png"

function BoxPackage({ image, date, people, country, desc, price, rate }) {
  return (
    <div className="box-package">
      <img src={image} alt="" />
      <div className="box-package-date">
        <p>{date}</p>
        <p>{people}</p>
      </div>
      <h2>{country}</h2>
      <p id="desc">{desc}</p>
      <div className="price">
        <p>{price}</p>
        <div><img src={vectorstar} alt="" /> <span>{rate}</span></div>
      </div>
    </div>
  )
}

export default BoxPackage
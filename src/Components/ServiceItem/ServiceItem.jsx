import "./ServiceItem.css"

function ServiceItem(props) {
    const{image,service,description}=props
  return (
    <div className="service-item">
        <img src={image} alt="img" />
        <h3>{service}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServiceItem
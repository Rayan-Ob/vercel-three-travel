import "./ServicesStyle.css"

function Services(props) {
  return (
    <div className="services">

      <h5>{props.desc}</h5>
      <h1>{props.title}</h1>
      <div className={`grid-services ${props.gridService}`}>
        {props.children}
      </div>
      
    </div>
  )
}

export default Services
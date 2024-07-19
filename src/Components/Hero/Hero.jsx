import "./HeroStyle.css"

function Hero(props) {
  return (
    
    <div className='hero' style={{ backgroundImage: `url(${props.background})` }}> 

      <h2 className={props.classTitle}>{props.title}</h2>

    </div>
  )
}

export default Hero
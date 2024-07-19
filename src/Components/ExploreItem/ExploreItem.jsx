import { NavLink } from "react-router-dom"
import "./ExploreItemStyle.css"

function ExploreItem(props) {
  return (
    <div className='ExploreItem' style={{ backgroundImage: `url(${props.background})` }}>
      <h4>Promotion</h4>
      <h2>{props.explore}</h2>
      <button >
        <NavLink to="/packages"> View Packages</NavLink>
      </button>

    </div>
  )
}

export default ExploreItem
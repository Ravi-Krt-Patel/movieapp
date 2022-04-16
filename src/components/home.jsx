
import {Cart} from "./cart";
import {Link} from "react-router-dom";
import "./home.css";
export const Home = ()=>{
  return (<>
  <div className="home-container" >
	  
	  <Link to="/series">
	    <Cart text = "Series"/>
	  </Link>
	  
	  
	  <Link to="/movie" >
	    <Cart text = "Movie"/>
	  </Link>
	
      
      
  </div>
  
  </>)
}
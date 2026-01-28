// for cloudnary image ep-4 34 min left
import { CDN_URL } from "../utils/constants";
const ReasturantCard = (props) =>{
  //const {infoname,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = props.resData;
  return(
    <div className="res-card" style={{backgroundColor: "red"}}>
    <img
      className="res-logo"
      alt="res-logo"
      src={`${CDN_URL}${props.resData.cloudinaryImageId}`}
      
    />
    {console.log(props.resData.info,"info......................")}
    <h3>{props.resData.name}</h3>
    <h4>{props.resData.cuisines.join(", ")}</h4>
    
    <h4>{props.resData.avgRating} stars</h4>
    <h4>{props.resData.costForTwo}</h4>
    <h4>{props.resData.sla.deliveryTime} min</h4>
    </div>
  )
}
export default ReasturantCard;

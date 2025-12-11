// for cloudnary image ep-4 34 min left
const ReasturantCard = (props) =>{
  const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = props.resData;
  return(
    <div className="res-card" style={{backgroundColor: "red"}}>
    <img
      className="res-logo"
      alt="res-logo"
      src= {cloudinaryImageId}
    />
    {console.log(props.resData)}
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} stars</h4>
    <h4>{costForTwo}</h4>
    <h4>{sla.deliveryTime} min</h4>
    </div>
  )
}
export default ReasturantCard;

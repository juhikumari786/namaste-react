// for cloudnary image ep-4 34 min left
const ReasturantCard = (props) =>{
  const {name,cuisines,avgRating,costForTwo,sla} = props.resData;
  return(
    <div className="res-card" style={{backgroundColor: "red"}}>
    <img
      className="res-logo"
      alt="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/022d0348-e0dd-4a4f-a646-70cd4514837b_1207210.jpg"
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

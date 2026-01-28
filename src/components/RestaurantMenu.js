import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} =useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/"+resId
    );
    const json = await data.json();
    //console.log(json.data,"ertfghjkhgfdfghjhgfgjhgfdfgtrtbn")
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  console.log(resInfo.cards[2].card.card.info, "-----------------------");
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, costForTwoMessage, cuisines = [] } = info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  //?.itemCards[0]?.card?.info
  console.log(itemCards, "__________________________");
  // https://mocki.io/v1/cca1ce62-9e58-482d-8f2e-81928f6bf29e
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100} </li>;
        })}
      </ul>
    </div>
  );
};
export default ResturantMenu;

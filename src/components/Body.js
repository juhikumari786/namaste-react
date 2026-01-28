import resList from "../utils/mockData";
import ReasturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  // normal variable
  // let listOfResturants2 = [
  //   {
  //     id: "748103",
  //     name: "Thenga Manga by Chef Pillai",
  //     cloudinaryImageId:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/022d0348-e0dd-4a4f-a646-70cd4514837b_1207210.jpg",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Chinese", "Biryani"],
  //     avgRating: 2.2,
  //     sla: { deliveryTime: 41 },
  //   },
  //   {
  //     id: "748102",
  //     name: "KFC",
  //     cloudinaryImageId:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/022d0348-e0dd-4a4f-a646-70cd4514837b_1207210.jpg",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Chinese", "Biryani"],
  //     avgRating: 3.2,
  //     sla: { deliveryTime: 41 },
  //   },
  //   {
  //     id: "748101",
  //     name: "Dominos",
  //     cloudinaryImageId:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/022d0348-e0dd-4a4f-a646-70cd4514837b_1207210.jpg",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Chinese", "Biryani"],
  //     avgRating: 3.5,
  //     sla: { deliveryTime: 41 },
  //   },
  //   {
  //     id: "748100",
  //     name: "Meghna Biryani",
  //     cloudinaryImageId:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/022d0348-e0dd-4a4f-a646-70cd4514837b_1207210.jpg",
  //     costForTwo: "₹500 for two",
  //     cuisines: [ "Biryani"],
  //     avgRating: 4.5,
  //     sla: { deliveryTime: 56 },
  //   },
  //   {
  //     id: "74899",
  //     name: "Sweet shorts",
  //     cloudinaryImageId:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/022d0348-e0dd-4a4f-a646-70cd4514837b_1207210.jpg",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Indian"],
  //     avgRating: 4.7,
  //     sla: { deliveryTime: 23 },
  //   }
  // ];

  // State

  // const arr = useState(listOfResturants2);
  // const [listOfResturants5, setListOfResturants5] = arr;
  // const listOfResturants6 = arr[0];
  // const setListOfResturants6 = arr[1];

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://mocki.io/v1/970387b0-a3dd-4f44-b767-b231f50f7584"
    // );
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    console.log(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      "json.........."
    );
    setListOfResturants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListOfResturants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredListOfResturants, setFilteredListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Conditional rendering
  // if(listOfResturants.length === 0){
  //   return <Shimmer/>
  // }

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredListOfResturants(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (list) => list.avgRating > 4
            );
            console.log(filteredList);
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>

      <div className="res-container">
        {filteredListOfResturants.map((resturant) => {
          console.log(resturant, "456785678567");
          return <Link key={resturant.info.id} to = {"/restaurants/" + resturant.info.id}><ReasturantCard resData={resturant.info}  /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;

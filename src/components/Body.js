import resList from "../utils/mockData";
import ReasturantCard from "./ResturantCard";
import { useState } from "react";
const Body = () => {

   // normal variable
  let listOfResturants2 = [
    {
      id: "748103",
      name: "Thenga Manga by Chef Pillai",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpegImage preview",
      costForTwo: "₹500 for two",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 4.2,
      sla: {
        deliveryTime: 41,
      },
    },
    {
      id: "748102",
      name: "KFC",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpegImage preview",
      costForTwo: "₹500 for two",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 3.2,
      sla: {
        deliveryTime: 41,
      },
    },
    {
      id: "748101",
      name: "Dominos",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpegImage preview",
      costForTwo: "₹500 for two",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 4.5,
      sla: {
        deliveryTime: 41,
      },
    },
  ];

  // Local State variable - super powerful variable 
  // const [listOfResturants,setListOfResturants] = useState([
  //   {
  //     id: "748103",
  //     name: "Thenga Manga by Chef Pillai",
  //     cloudinaryImageId:
  //       "FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpegImage preview",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Chinese", "Biryani"],
  //     avgRating: 4.2,
  //     sla: {
  //       deliveryTime: 41,
  //     },
  //   },
  //   {
  //     id: "748102",
  //     name: "KFC",
  //     cloudinaryImageId:
  //       "FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpegImage preview",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Chinese", "Biryani"],
  //     avgRating: 3.2,
  //     sla: {
  //       deliveryTime: 41,
  //     },
  //   },
  //   {
  //     id: "748101",
  //     name: "Dominos",
  //     cloudinaryImageId:
  //       "FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpegImage preview",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Chinese", "Biryani"],
  //     avgRating: 4.5,
  //     sla: {
  //       deliveryTime: 41,
  //     },
  //   },
  // ]);
   const [listOfResturants,setListOfResturants] = useState(listOfResturants2);
 const arr = useState(listOfResturants2);
    const [listOfResturants5,setListOfResturants5] = arr;
 const listOfResturants6 = arr[0]
 const setListOfResturants6 = arr[1]
  return (
    <div className="body">
      {/* <div className="Search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(list => list.avgRating>4)
            console.log(filteredList)
            setListOfResturants(filteredList)
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ReasturantCard
            resData={resturant}
            key={resturant.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;

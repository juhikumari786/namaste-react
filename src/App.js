import React from "react";
import { createRoot } from "react-dom/client";

// React Element

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello word using React"
// );
// //nested html structure
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {id: "child1", key: "h1"}, "I am h1"),
//     React.createElement(
//       // Sibling
//       "h2",
//       {id: "child2", key: "h2"},
//       "I am h2"
//     ),
//   ])
// );
// const root = createRoot(document.getElementById("root"));
// root.render(parent);


// JSX

// const jsxHeading = <h1 className ="heading">
// Namaste React using JSX
// </h1>;
// const root = createRoot(document.getElementById("root"));
// root.render(jsxHeading)

//React element
// const title =  <h1 className="title">{head}Namaste React Title</h1>
// const head =  <h1 className="head">Namaste React head</h1>
// // Functional component
// const number =10000;
// const HeadingComponent =() => {
//   return (<div id="container">
//    <Title/>
//    <Title></Title>
//    {Title()}
//    <h1>{title}</h1>
//     <h1 className ="heading">Namaste React using Functional component</h1>;
//   </div>)
// };

// const Title = () => {
//  return <h1 className="head">Namaste React Title</h1>
// }


// // we can write using normal functions as well 
// const Title1 = function(){
//  return <h1 className="head">Namaste React Title</h1>
// }
const resList =[{
"card": {
"card": {
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"748103",
"name"
:
"Thenga Manga by Chef Pillai",
"cloudinaryImageId"
:
"FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpegImage preview",
"locality"
:
"Brigade Road",
"areaName"
:
"Central Bangalore",
"costForTwo"
:
"₹500 for two",
"cuisines": [
"Chinese",
"Biryani"
],
"avgRating"
:
4.2,
"parentId"
:
"447109",
"avgRatingString"
:
"4.2",
"totalRatingsString"
:
"910",
"sla": {
"deliveryTime"
:
41,
"lastMileTravel"
:
2.6,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"40-50 mins",
"lastMileTravelString"
:
"2.6 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-11-02 23:45:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"aggregatedDiscountInfoV2": {
},
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"textBased": {
},
"imageBased": {
},
"textExtendedBadges": {
}
}
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
},
"commsStyling": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"3.0",
"ratingCount"
:
"153"
},
"source"
:
"GOOGLE",
"sourceIconImageId"
:
"v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
},
"cta": {
"link"
:
"swiggy://menu?restaurant_id=748103&source=collection&query=Biryani",
"text"
:
"RESTAURANT_MENU",
"type"
:
"DEEPLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type"
:
"RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId"
:
"MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"30529",
"name"
:
"Karama",
"cloudinaryImageId"
:
"FOOD_CATALOG/IMAGES/CMS/2024/11/29/5d5a0fe3-a690-445f-8042-d1462668d6b2_cd8d6427-bf91-4358-b17c-dd426398175c.pngImage preview",
"locality"
:
"Frazer Town",
"areaName"
:
"Frazer Town",
"costForTwo"
:
"₹400 for two",
"cuisines": [
"Arabian",
"Biryani",
"Desserts",
"Mughlai",
"North Indian"
],
"avgRating"
:
4.5,
"parentId"
:
"9722",
"avgRatingString"
:
"4.5",
"totalRatingsString"
:
"16K+",
"promoted"
:
true,
"adTrackingId"
:
"cid=1df7cd4b-7737-4f7d-95cd-4ca416f544f7~p=1~adgrpid=1df7cd4b-7737-4f7d-95cd-4ca416f544f7#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30529~plpr=COLLECTION~eid=7efac950-579d-4daa-88d5-5ceb3c513d05~srvts=1762052740079~collid=83639",
"sla": {
"deliveryTime"
:
44,
"lastMileTravel"
:
5,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"40-50 mins",
"lastMileTravelString"
:
"5.0 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-11-02 11:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"aggregatedDiscountInfoV2": {
},
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"textBased": {
},
"imageBased": {
},
"textExtendedBadges": {
}
}
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
},
"commsStyling": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"4.4",
"ratingCount"
:
"22K+"
},
"source"
:
"GOOGLE",
"sourceIconImageId"
:
"v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId"
:
"1df7cd4b-7737-4f7d-95cd-4ca416f544f7"
},
"analytics": {
},
"cta": {
"link"
:
"swiggy://menu?restaurant_id=30529&source=collection&query=Biryani",
"text"
:
"RESTAURANT_MENU",
"type"
:
"DEEPLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type"
:
"RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId"
:
"MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"628642",
"name"
:
"KARIM'S- Original from Jama Masjid Delhi- 6",
"cloudinaryImageId"
:
"2ac7b337e85e5b8ef20b8ae3be9c4a8a",
"locality"
:
"Central Bangalore",
"areaName"
:
"St. Marks Road",
"costForTwo"
:
"₹800 for two",
"cuisines": [
"Mughlai",
"Biryani",
"North Indian",
"Kebabs",
"Desserts"
],
"avgRating"
:
4.2,
"parentId"
:
"284854",
"avgRatingString"
:
"4.2",
"totalRatingsString"
:
"1.1K+",
"sla": {
"deliveryTime"
:
32,
"lastMileTravel"
:
1.4,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"30-35 mins",
"lastMileTravelString"
:
"1.4 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-11-03 02:15:00",
"opened"
:
true
},
"badges": {
"imageBadges": [
{
"imageId"
:
"newg.pngImage preview",
"description"
:
"Gourmet"
}
]
},
"isOpen"
:
true,
"aggregatedDiscountInfoV2": {
},
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"textBased": {
},
"imageBased": {
"badgeObject": [
{
"attributes": {
"description"
:
"Gourmet",
"imageId"
:
"newg.pngImage preview"
}
}
]
},
"textExtendedBadges": {
}
}
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
},
"commsStyling": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"4.0",
"ratingCount"
:
"959"
},
"source"
:
"GOOGLE",
"sourceIconImageId"
:
"v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
},
"cta": {
"link"
:
"swiggy://menu?restaurant_id=628642&source=collection&query=Biryani",
"text"
:
"RESTAURANT_MENU",
"type"
:
"DEEPLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type"
:
"RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId"
:
"MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"92384",
"name"
:
"Ambur Star Briyani Since 1890",
"cloudinaryImageId"
:
"FOOD_CATALOG/IMAGES/CMS/2024/4/13/6aa31197-769b-4d46-aabe-dac4aa1b47d2_fe4708f2-8937-4d5d-8e89-67a3a0129cb2.jpgImage preview",
"locality"
:
"Indiranagar",
"areaName"
:
"Indiranagar",
"costForTwo"
:
"₹600 for two",
"cuisines": [
"Biryani",
"Chettinad",
"Andhra",
"Beverages",
"Seafood"
],
"avgRating"
:
4.5,
"parentId"
:
"21400",
"avgRatingString"
:
"4.5",
"totalRatingsString"
:
"24K+",
"promoted"
:
true,
"adTrackingId"
:
"cid=88b60770-4005-4e91-8e06-16a42ce31ce1~p=3~adgrpid=88b60770-4005-4e91-8e06-16a42ce31ce1#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=92384~plpr=COLLECTION~eid=971f6432-8c81-40e2-8ba5-4211c3488dd8~srvts=1762052740079~collid=83639",
"sla": {
"deliveryTime"
:
43,
"lastMileTravel"
:
6.2,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"40-45 mins",
"lastMileTravelString"
:
"6.2 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-11-03 03:15:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"textBased": {
},
"imageBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹119",
"logoCtx": {
"text"
:
"BENEFITS"
}
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
},
"commsStyling": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"3.8",
"ratingCount"
:
"1.9K+"
},
"source"
:
"GOOGLE",
"sourceIconImageId"
:
"v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId"
:
"88b60770-4005-4e91-8e06-16a42ce31ce1"
},
"analytics": {
},
"cta": {
"link"
:
"swiggy://menu?restaurant_id=92384&source=collection&query=Biryani",
"text"
:
"RESTAURANT_MENU",
"type"
:
"DEEPLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type"
:
"RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId"
:
"MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"1240924",
"name"
:
"Chickpet Donne Biryani House",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2025/10/23/4cdde974-0c57-40be-994f-802b38636ddf_1240924.jpgImage preview",
"locality"
:
"Basavanagudi",
"areaName"
:
"Basavanagudi",
"costForTwo"
:
"₹200 for two",
"cuisines": [
"Biryani",
"South Indian"
],
"avgRating"
:
4.1,
"parentId"
:
"5634",
"avgRatingString"
:
"4.1",
"totalRatingsString"
:
"<3",
"sla": {
"deliveryTime"
:
37,
"lastMileTravel"
:
3,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"35-40 mins",
"lastMileTravelString"
:
"3.0 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-11-02 17:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textExtendedBadges": {
},
"textBased": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"10% OFF",
"subHeader"
:
"UPTO ₹40",
"logoCtx": {
"text"
:
"BENEFITS"
}
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
},
"commsStyling": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded"
:
true,
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
},
"cta": {
"link"
:
"swiggy://menu?restaurant_id=1240924&source=collection&query=Biryani",
"text"
:
"RESTAURANT_MENU",
"type"
:
"DEEPLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type"
:
"RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId"
:
"MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"1155864",
"name"
:
"Rajanna Militry Hotel",
"cloudinaryImageId"
:
"FOOD_CATALOG/IMAGES/CMS/2024/11/16/a098c60b-afce-4632-a405-517b217122e5_c954cda5-ed4d-47b3-ac76-b3f89c3e4363.jpgImage preview",
"locality"
:
"Banashankari",
"areaName"
:
"Banashankari",
"costForTwo"
:
"₹300 for two",
"cuisines": [
"Biryani",
"Kebabs"
],
"avgRating"
:
3.8,
"parentId"
:
"636841",
"avgRatingString"
:
"3.8",
"totalRatingsString"
:
"346",
"promoted"
:
true,
"adTrackingId"
:
"cid=92ff2820-e7a2-44b0-8121-38ed2f429f0f~p=4~adgrpid=92ff2820-e7a2-44b0-8121-38ed2f429f0f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1155864~plpr=COLLECTION~eid=b8e62673-ddde-4da1-bb47-29f9ad99a147~srvts=1762052740079~collid=83639",
"sla": {
"deliveryTime"
:
43,
"lastMileTravel"
:
7.6,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"40-45 mins",
"lastMileTravelString"
:
"7.6 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-11-02 23:00:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {
},
"textBased": {
},
"imageBased": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹19",
"logoCtx": {
"text"
:
"BENEFITS"
}
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
},
"commsStyling": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded"
:
true,
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId"
:
"92ff2820-e7a2-44b0-8121-38ed2f429f0f"
},
"analytics": {
},
"cta": {
"link"
:
"swiggy://menu?restaurant_id=1155864&source=collection&query=Biryani",
"text"
:
"RESTAURANT_MENU",
"type"
:
"DEEPLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type"
:
"RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId"
:
"MENU_RETURN_FOOD"
}
}
}
];

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://e7.pngegg.com/pngimages/815/847/png-clipart-take-out-android-sindelantal-app-food-text.png" alt="logo" />
    </div>
    <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Conatact Us</li>
      <li>Cart</li>
    </ul>
    </div>
    </div>
  )
}

const Body = () => {
return(
  <div className="body">
    <div className="Search">Search</div>
    <div className="res-container">
    {
      resList.map((resturant) => <ReasturantCard resData = {resturant} key ={resturant.card.card.info.id}/>)
    }
      
    </div>
  </div>
)
}
const styleCard = {
  backgroundColor: "red"
}
// for cloudnary image ep-4 34 min left
const ReasturantCard = (props) =>{
  const {name,cuisines,avgRating,costForTwo,sla} = props.resData.card.card.info;
  return(
    <div className="res-card" style={{backgroundColor: "red"}}>
    <img
      className="res-logo"
      alt="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/022d0348-e0dd-4a4f-a646-70cd4514837b_1207210.jpg"
    />
    {console.log(props.resData.card.card.info)}
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} stars</h4>
    <h4>{costForTwo}</h4>
    <h4>{sla.deliveryTime} min</h4>
    </div>
  )
}

const AppLayout = () =>{
  return(
    <div className ="app">
<Header/>
<Body/>
    </div>
  )
}
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
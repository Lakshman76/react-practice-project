import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {

  const { resId } = useParams();
  // console.log(resId);

const restaurant = useRestaurant(resId);

  return (!restaurant) ? <Shimmer /> : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {resId}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="image" />
        <h2>{restaurant.name}</h2>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.avgRating} stars</h2>
        <h2>{restaurant.slugString}</h2>
      </div>
      <div>
        <h1>menu list</h1>
        {/* Getting error */}
        <ul>
          {/* {restaurantMenu.itemCards.map((item) => {
            return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          })} */}
          {/* <li>{restaurantMenu?.card?.info?.category}</li> */}
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>

        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

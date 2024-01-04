import { IMG_CDN_URL } from "../config";
import { useContext } from 'react';
import UserContext from "../utils/userContext";

RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const {user} = useContext(UserContext);
  return (
    <div className="card shadow-lg w-60 p-1 m-2 bg-purple-100">
      <img
        className="w-56 p-1"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="food"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5>{user.name} - {user.email}</h5>
    </div>
  );
};
export default RestaurantCard;

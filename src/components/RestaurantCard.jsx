import { IMG_CDN_URL } from "../config";

RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
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
    </div>
  );
};
export default RestaurantCard;

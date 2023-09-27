import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useAllRestaurant from "../utils/useAllRestaurant";
import useCheckOnline from "../utils/useCheckOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const { allRestaurant, filteredRestaurants } = useAllRestaurant();
  // const filteredRestaurants = useAllRestaurant();

  console.log("render");

  const isOnline = useCheckOnline();

  if (!isOnline) {
    return <h1>Offline! check your internet connection!!</h1>;
  }

  // Don't render component (early return)
  if (!allRestaurant) return null;

  // if(filteredRestaurants?.length === 0) return <h1>No Restaurant found!</h1>

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <main>
      <div className="my-3 p-4 bg-pink-100 ">
        <input
          className="p-2 m-2 focus:bg-green-200"
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-purple-900 text-white p-2 rounded-lg ml-3 hover:bg-purple-600"
          onClick={() => {
            const data = filterData(searchInput, allRestaurant);
            console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {/* write logic here for No Restaurant found! */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Body;

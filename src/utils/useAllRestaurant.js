import { useEffect, useState } from "react";
import { API_URL } from "../config";

const useAllRestaurant = () => {

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(API_URL);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await data.json();
      // console.log(jsonData);
      // optional chaining
      setAllRestaurant(
        jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return {allRestaurant, filteredRestaurants};
}

export default useAllRestaurant;
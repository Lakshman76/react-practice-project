import { useState, useEffect } from "react";

const useRestaurant = (resId) => {

    const [restaurant, setRestaurant] = useState({});

    // Get data from API
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5376318&lng=77.2282863&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    
        const jsonData = await data.json();
        console.log(jsonData);
        setRestaurant(jsonData?.data?.cards[0]?.card?.card?.info);
      }

    // return restaurant data
      return restaurant;
}

export default useRestaurant;
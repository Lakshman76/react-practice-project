export function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
      return restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase());
    });
    return filterData;
}

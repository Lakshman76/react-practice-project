import React from "react";
import ReactDOM from "react-dom/client";

// Named import
// import { Logo } from "./components/Header";
// default import
// import NavItem from "./components/Header";

// Both import together
// import NavItem, { Logo } from "./components/Header";

// when two or more component export from same technique means all exported from named as well as default then - 
// import { Logo, NavItem } from "./components/Header";

import Header from "./components/Header";


// const heading1 = React.createElement(
//     "h1",
//     {
//         id:"heading1"
//     }, 
//     "Hello, World!"
// );
// console.log(heading1);
// const heading2 = React.createElement(
//     "h2",
//     {
//         id:"heading2"
//     }, 
//     "Hello, World!"
// );
// const container = React.createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [heading1, heading2]
// );

// JSX - 

// const heading = <h1>Hello, World!</h1>;
// const heading = (
//     <h1 id="title" key="h1">
//         Hello, World!
//     </h1>
// );

// Components 

// functional component 

// const Container1 = function(){
//     return (
//         <div>
//             {heading}
//             <h1>Hello</h1>
//             <h2>HYYY</h2>
//         </div>
//     )
// }

// const container2 = () => (
//     <h1>Container2</h1>
// )

// let name = "Laksh";
// Component composition - component inside component
// const FinalContainer = () => {
//     return (
//         <div>
//             {console.log(`Writte any js code ${name}`)}
//             <Container1 />
//             {container2()}
//             <h2>Namaste</h2>
//         </div>
//     );
// }

/************************** Cloning Website*****************************/

// Header 
// const Logo = () => {
//     return(
//         <div className="title">
//             <img src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" alt="logo"/>
//         </div>
//     )
// }
// const NavItem = () => {
//     return(
//         <div className="nav-list-item">
//             <ul>
//                 <li>Home</li>
//                 <li>Cart</li>
//                 <li>About Us</li>
//                 <li>Contact Us</li>
//             </ul>
//         </div>
//     )
// }
// const Header = () => {
//     return(
//         <header>
//             <Logo />
//             <NavItem />
//         </header>
//     )
// }

// Body

// const RastaurantCard = () => {
//     return(
//         <div className="card">
//             <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" alt="food" />
//             <h2>Burger King</h2>
//             <h3>Burger, American</h3>
//             <h4>4.2 stars</h4>
//         </div>
//     )
// }

// alternative of above 

// const burgerKing = {
//     name:"Burger King",
//     image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cusines: ["Burger", "American"],
//     rating: 4.2
// }

// Now creating card using **** config driven ui *****
const restaurantList = [
    {
        type:"restaurants",   
      "info": {
        "id": "644123",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "e2ee93694dd952629beeea1f2433cdd6",
        "locality": "Morabadi",
        "areaName": "Kanke",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.3,
        "veg": true
        }
    },
    {
        type:"restaurants",
        "info": {
          "id": "81231",
          "name": "KFC",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "locality": "Nucleus Mall",
          "areaName": "Lalpur",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4
        }
    },
    {
        type:"restaurants",
        "info": {
          "id": "80477",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "weopmp8my0krhzs5obrh",
          "locality": "Harmu Road",
          "areaName": "Harmu",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.1
        }
    },
    {
        type:"restaurants",
        "info": {
          "id": "448094",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "zwzlgcpqnnc0wpc8lnli",
          "locality": "Hatma",
          "areaName": "Ahirtoli",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.7
        }
    },
    {
        type:"restaurants",
        "info": {
          "id": "81408",
          "name": "Jashn The Restaurant",
          "cloudinaryImageId": "vwezenkxqvmo1pcjfzti",
          "locality": "Purulia Road",
          "areaName": "Nayatoli",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Chinese",
            "Fast Food"
          ],
          "avgRating": 3.8
        }
    },
    {
        type:"restaurants",
        "info": {
          "id": "727850",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "2e42bde2a2229b2f21bccfc4b64ef7ca",
          "locality": "52 Circular road",
          "areaName": "Bimla Shopping Complex",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream"
          ],
          "avgRating": 4.4
        }
    },
    {
        type:"restaurants",
        "info": {
          "id": "363841",
          "name": "Faasos - Wraps & Rolls",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "locality": "HB Road",
          "areaName": "Kokar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.1
        }
    }
]

// There are lots of way to print data on browser

// STEP-1

// const RestaurantCard = (props) => {
//     {console.log(props);}
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.restaurant.info.cloudinaryImageId} alt="food" />
//             <h2>{props.restaurant.info.name}</h2>
//             <h3>{props.restaurant.info.cuisines.join(", ")}</h3>
//             <h4>{props.restaurant.info.avgRating} stars</h4>
//         </div>
//     )
// }
// const Body = () => {
//     return(
//         <main>
//             <RestaurantCard restaurant = {restaurantList[0]} />
//             <RestaurantCard restaurant = {restaurantList[1]} />
//             <RestaurantCard restaurant = {restaurantList[2]} />
//             <RestaurantCard restaurant = {restaurantList[3]} />
//             <RestaurantCard restaurant = {restaurantList[4]} />
//             <RestaurantCard restaurant = {restaurantList[5]} />
//             <RestaurantCard restaurant = {restaurantList[6]} />
//         </main>
//     )
// }

// STEP 2

// const RestaurantCard = ({restaurant}) => {
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ restaurant.info.cloudinaryImageId} alt="food" />
//             <h2>{restaurant.info.name}</h2>
//         </div>
//     )
// }
// const Body = () => {
//     return(
//         <main>
//             <RestaurantCard restaurant = {restaurantList[0]} />
//             <RestaurantCard restaurant = {restaurantList[1]} />
//             <RestaurantCard restaurant = {restaurantList[2]} />
//         </main>
//     )
// }

// STEP 3-

// const RestaurantCard = ({restaurant}) => {
//     const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info;
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="food" />
//             <h2>{name}</h2>
//         </div>
//     )
// }
// const Body = () => {
//     return(
//         <main>
//             <RestaurantCard restaurant = {restaurantList[0]} />
//             <RestaurantCard restaurant = {restaurantList[1]} />
//             <RestaurantCard restaurant = {restaurantList[2]} />
//         </main>
//     )
// }

// STEP 4 

// const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="food" />
//             <h2>{name}</h2>
//         </div>
//     )
// }
// const Body = () => {
//     return(
//         <main>
//             <RestaurantCard cloudinaryImageId = {restaurantList[0].info.cloudinaryImageId} name={restaurantList[0].info.name} />

//             <RestaurantCard cloudinaryImageId = {restaurantList[1].info.cloudinaryImageId} name={restaurantList[1].info.name} />

//             <RestaurantCard cloudinaryImageId = {restaurantList[2].info.cloudinaryImageId} name={restaurantList[2].info.name} />

//         </main>
//     )
// }

// STEP 5

// const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="food" />
//             <h2>{name}</h2>
//         </div>
//     )
// }
// const Body = () => {
//     return(
//         <main>
//             <RestaurantCard {...restaurantList[0].info} />
//             <RestaurantCard {...restaurantList[1].info} />
//             <RestaurantCard {...restaurantList[2].info} />
//         </main>
//     )
// }


// STEP 6 - Good way

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="food" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}
const Body = () => {
    return(
        <main>
            {
                restaurantList.map((restaurant)=>{
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                })
            }
        </main>
    )
}

// footer

const Footer = () => {
    return(
        <h3>Footer</h3>
    )
}
const appLayout = () => {
    return(
        <>
            <Header />
            <Body />    
            <Footer />    
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(appLayout());
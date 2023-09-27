import { Outlet } from "react-router-dom";
import ProfileFunctionalComp from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

// const About = () => {
//     return(
//         <>
//             <h1>Hello Everyone, This is About Us page</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates eum eius nesciunt esse atque repellat quasi asperiores quam quia!</p>
//             <ProfileFunctionalComp name="Lakshman"/>
//             <Profile name="LakshmanClass"/>
//         </>
//     )
// }
class About extends Component{
    constructor(props){
        super(props);
        // console.log("p-constructor");
    }
    componentDidMount(){
        // console.log("p-componentDidMount");
    }
    render(){
        // console.log("p-Render");
        return(
            <>
                <h1>Hello Everyone, This is About Us page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates eum eius nesciunt esse atque repellat quasi asperiores quam quia!</p>
                <ProfileFunctionalComp name="Lakshman"/>
            </>
        )
    }
}

export default About;
import { useEffect, useState } from "react";
const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("useEffeect in functional comp..");
        }, 1000);

        console.log("useEffect");

        return(()=>{
            clearInterval(timer);
            console.log("useEffect return");
        })
    },[])
    console.log("render");
    return(
        <>
            <h1>This is Lakshman's profile</h1>
            <h2>Name : {props.name}</h2>
            <h3>Count : {count}</h3>
            <button onClick={
                ()=>{
                    setCount(count+1);
                } 
            }>ADD</button>
        </>
    )
}

export default Profile;
import React from "react";
class Profile extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 1
        }
        this.state = {
            userInfo:{
                name:"",
            }
        }
        console.log("constructor");
    }

    // async componentDidMount(){
         // Here API calls should happen

    //     const data = await fetch("https://api.github.com/users/Lakshman76");
    //     const jsonData = await data.json();

    //     this.setState({
    //         userInfo:jsonData
    //     });

    //     console.log("componentDidMount");
    //     console.log(jsonData);
    // }

    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("componentDidMount");
        }, 1000);
    }
    // It will call after every next render
    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
            // Code
        }
        // console.log("componentDidUpdate");
    }

    // It will call when we go to another page i.e, unmount and doing cleanup
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }
    render(){
        const {count2} = this.state;
        console.log("Render");
        return(
            // <>
            //     <h1>This is Lakshman's class based profile </h1>
            //     <h2>Name : {this.props.name}</h2>
            //     <h3>Count : {this.state.count}</h3>
            //     <h3>Count2 : {count2}</h3>
            //     <button onClick={() => {
                        // this.state = 1; //don't write like this
                        // we don't mutate state directly

            //         this.setState({
            //             count2 : count2 + 1
            //         })
            //     }}>ADD</button>
            // </>

            <>
                <h1>Name : {this.state.userInfo.name}</h1>
                <img src={this.state.userInfo.avatar_url} alt="pic" />
                <h2>Followers : {this.state.userInfo.followers}</h2>
                <h2>Following : {this.state.userInfo.following}</h2>
                <h2>Following : {this.state.userInfo.bio}</h2>
            </>
        )
    }
}

export default Profile;
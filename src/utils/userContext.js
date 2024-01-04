import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "Dummy Name",
        email: "dummy@gmail.com"
    }
})
UserContext.displayName = 'userContext'; // used to identify each context in profiler

export default UserContext;
import { createContext } from "react";

const userContext = createContext({
    user:{
        name: "Dummy Name",
        email: "dummy@gmail.com"
    }
})
userContext.displayName = 'userContext';

export default userContext;
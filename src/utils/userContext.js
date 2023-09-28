import { createContext } from "react";

const userContext = createContext({
    user:{
        name: "Lakshman",
        email: "abc@gmail.com"
    }
})

export default userContext;
// two react hooks that are functions
import React, {createContext,useContext} from "react";
import {useProductReducer} from './reducers';

// createcontext creates a new Context Object with two components, Provider and Consumer 
const StoreContext = createContext();
// Destructure Provider from the new Context Obj created 
const {Provider} = StoreContext;

const StoreProvider = ({value = [],...props}) =>{
    const [state,dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value = {[state,dispatch]} {...props}/>;
}

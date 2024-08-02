import { createContext, useState } from "react";

export const AppGlobalContext = createContext(null);

const AppGlobalState = ({children}) => {

    const [open, setOpen] = useState(false);
    const [singleProductItem, setSingleProductItem] = useState([]);

    return <>
        <AppGlobalContext.Provider value={{ open, setOpen, singleProductItem, setSingleProductItem }} >
            {children}
        </AppGlobalContext.Provider>
    </>
}

export default AppGlobalState
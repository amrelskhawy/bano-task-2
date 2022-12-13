import { createContext, useState } from "react";

export const DataContext = createContext({
    currentDataDisplayed: null,
    setCurrentDataDisplayed: () => {}
})


export const DataContextProvider = ({children}) => {
    const [currentDataDisplayed , setCurrentDataDisplayed] = useState(null)
    const value = {currentDataDisplayed , setCurrentDataDisplayed}

    return <DataContext.Provider value={value} >
        {children}
    </DataContext.Provider>
}
import {createContext, useState} from "react";

export const ScoreContext = createContext(null);

function ScoreContextProvider({children}) {

    const [FinalScore, setFinalScore] = useState(null)

    return(
        <ScoreContext.Provider value={{FinalScore, setFinalScore}}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider;
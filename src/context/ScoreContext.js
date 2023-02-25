import {createContext, useState} from "react";

export const ScoreContext = createContext(null);

function ScoreContextProvider({children}) {

    const [finalScore, setFinalScore] = useState(null)

    return(
        <ScoreContext.Provider value={{finalScore, setFinalScore}}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider;
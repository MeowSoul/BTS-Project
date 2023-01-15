import {Route, Routes} from "react-router-dom";
import Header from "./componets/header/header";
import IndexPage from "./pages/IndexPage/IndexPage";
import TestPage from "./pages/TestPage/TestPage";


function App() {
  return (
    <div className="App">
       <Header/>
        <Routes>
            <Route path={"/"} element={<IndexPage/>}/>
            <Route path={"/test"} element={<TestPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

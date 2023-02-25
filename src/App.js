import {Route, Routes} from "react-router-dom";
import Header from "./componets/header/header";
import IndexPage from "./pages/IndexPage/IndexPage";
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";

function App() {
  return (
    <div className="App">
       <Header/>
        <Routes>
            <Route path={"/"} element={<IndexPage/>}/>
            <Route path={"/test"} element={<TestPage/>}/>
            <Route path={"/result"} element={<ResultPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

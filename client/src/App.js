import {Route, Routes} from "react-router-dom";
import AllFarmsPage from "./pages/AllFarmsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllFarmsPage/>} exact/>
      </Routes>
    </div>
  );
}

export default App;

import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

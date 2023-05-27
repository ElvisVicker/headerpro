import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
export default function App() {
  return (
    <div>
      <Header />


      <Routes>
        <Route path="/home" element={<Home />}></Route>

      </Routes>


    </div>
  );
}


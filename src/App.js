import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Shared/Login/Login";
import SignUp from "./Pages/Shared/SignUp/SignUp";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import FoodHeader from "./Pages/Home/FoodHeader/FoodHeader";
import Breakfast from "./Pages/Home/Breakfast/Breakfast";
import Lunch from "./Pages/Home/Lunch/Lunch";
import Dinner from "./Pages/Home/Dinner/Dinner";
import Test from "./Pages/Test/Test";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/test"
          element={
            <RequireAuth>
              <Test></Test>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

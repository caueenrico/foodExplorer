import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";


export function AppRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish" element={<Dish />} />
    </Routes>
  )
}
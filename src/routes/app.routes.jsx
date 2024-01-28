import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import { UpdateDish } from "../pages/UpdateDish";


export function AppRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newdish" element={<NewDish/>} />
      <Route path="/updatedish/:id" element={<UpdateDish/>} />
      
      <Route path="/dish/:id" element={<Dish />} />
    </Routes>
  )
}
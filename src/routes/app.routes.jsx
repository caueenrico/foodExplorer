import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import { UpdateDish } from "../pages/UpdateDish";
import { useAuth } from "../hooks/auth";
import { OrderClient } from "../pages/OrderClient";

export function AppRoutes() {
  const { userExists } = useAuth();
  const role = userExists.role;

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {role === "admin" ? (
        <Route path="/updatedish/:id" element={<UpdateDish />} />
      ) : (
        <Route path="/" element={<Home />} />
      )}

      <Route path="/newdish" element={<NewDish />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/orderclient" element={<OrderClient />} />
    </Routes>
  );
}

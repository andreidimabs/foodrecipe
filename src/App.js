import React from "react";
import Meal from "./Components/Meal";
import "./Components/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeInfo from "./Components/RecipeInfo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/:MealId" element={<RecipeInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

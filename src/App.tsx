import React from "react";
import { Route, Routes } from "react-router-dom";
import { OpenToDo } from "./pages/OpenToDo";
import { FinishedToDo } from "./pages/FinishedToDo";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OpenToDo />} />
          <Route path="finished" element={<FinishedToDo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

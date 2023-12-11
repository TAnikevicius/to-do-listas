import React from "react";
import { Route, Routes } from "react-router-dom";
import { OpenToDoPage } from "./pages/OpenToDoPage";
import { FinishedToDoPage } from "./pages/FinishedToDoPage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OpenToDoPage />} />
          <Route path="finished" element={<FinishedToDoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

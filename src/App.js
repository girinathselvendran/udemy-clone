import React, { createContext, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ViewCourses from "./Pages/ViewCourse";

const stateContext = createContext({});
export { stateContext };

function App() {

  const [state, setState] = useState()

  return (
    <stateContext.Provider
      value={{
        setState,
        state
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/view-course/:id" element={<ViewCourses />} />
        </Routes>
      </BrowserRouter>
    </stateContext.Provider >
  );
}

export default App;

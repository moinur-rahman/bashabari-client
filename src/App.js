import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Homepage from "./screen/index";
import Login from "./screen/Login";
import Register from "./screen/Register";
import RegisterWorker from "./screen/RegisterWorker";
import Search from "./screen/SearchOption";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/registerWorker" element={<RegisterWorker />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

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
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/registerWorker" element={<RegisterWorker />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

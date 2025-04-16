import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact/Contact";
import Project from "../page/Project/";

import ScrollToTop from "./ScrollTop";
import ScrollToId from "./ScrollId";

function Routing() {
  return (
    <>
      <ScrollToTop/>
      
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="Projects" element={<Project />}></Route>
      </Routes>
    </>
  );
}

export default Routing;

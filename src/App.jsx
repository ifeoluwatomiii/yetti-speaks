import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const App = () => {
	return (
		<div className="font-poppins">
      <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About/>}/>
			</Routes>
		</div>
	);
};

export default App;

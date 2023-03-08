import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Newsletter from "../components/Newsletter";
import Video from "../components/Video";
import Latest from "../components/Latest";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Image />
			<Hero />
			<Newsletter />
			<Video />

			<Latest postsDisplayed={6} showLink={true} />
		</div>
	);
};

export default Home;

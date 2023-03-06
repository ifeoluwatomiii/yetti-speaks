import React from "react";
import videoBg from "../assets/production.mp4";

const Video = () => {
	return (
		<div className="object-cover object-top container max-w-[1280px] mx-auto pb-[70px] px-4">
			<video
				className="w-[100%] h-[20%] mix-blend-darken  bg-fixed"
				src={videoBg}
				autoPlay
				loop
				muted
			/>
		</div>
	);
};

export default Video;

import React from "react";
import Latest from "../components/Latest";

const Blog = () => {
	return (
		<div>
			<Latest postsDisplayed={-1} showLink={false} />
		</div>
	);
};

export default Blog;

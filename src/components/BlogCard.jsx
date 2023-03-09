import postcss from "postcss";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ReactTimeAgo from "react-time-ago";

const BlogCard = ({ ...post }) => {
	return (
		<div>
			<img src={post.featured_image_url} alt="" />
			<h2 classname="font-bold text-2xl text-white" style={cardStyle}>
				{post.title}{" "}
			</h2>
			<p style={{ color: "#000", fontSize: 15, marginTop: 10 }}>
				{post.content}
			</p>
			<div className="flex items-center justify-between mt-6">
				<button className=" flex items-center gap-2 hover:border-b hover:border-black transition duration-300 ease-in">
					Read More <BsArrowRight />
				</button>
				<ReactTimeAgo date={post.date_posted} locale="en-US" className= "text-[14px] text-black/60"/>
			</div>
		</div>
	);
};

const cardStyle = { fontSize: 18, fontWeight: 600, marginTop: 20 };

export default BlogCard;

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const Latest = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setPosts(response.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="mb-80">
			<div className="flex items-center justify-between lg:max-w-[1280px] mx-auto py-6 px-5">
				<h1 className="font-bold text-2xl">Latest Posts</h1>
				<a
					className="underline decoration-[#9b6f56bd] decoration-2 underline-offset-8"
					href="">
					Visit blog
				</a>
			</div>

			<div>
				{isLoading ? (
					<h3 classname="text-center">Loading ...</h3>
				) : (
					<div className="grid xl:grid-cols-3 xl:gap-10 grid-cols-2 gap-8 container max-w-[1280px] mx-auto px-4">
						{posts.map((post) => {
							return <BlogCard key={post.id} {...post} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Latest;

import React from "react";
import { usePostContext } from "../context/postContext";
import useGetPosts from "../hooks/useGetPosts";
import PostCard from "./PostCard";

function Feed() {
  const { posts } = useGetPosts();
  console.log(posts)
  return (
    <div className="w-full p-4 flex flex-wrap items-start justify-start">
      {posts?.posts.length ===0 && <div className=" w-full text-center text-4xl ">No Posts To Show</div>}
      {posts?.posts.map((post) => (

        <PostCard
          key={post._id}
          title={post.title}
          images={post.images}
          description={post.description}
          city={post.city}
          state={post.state}
          pincode={post.pincode}
          createdAt={post.createdAt}
          postedBy={post.postedBy}
          postID={post._id}
        />
      ))}
    </div>
  );
}

export default Feed;

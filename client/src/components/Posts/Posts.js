import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { Container, Wrapper } from "./Posts.elements";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <Container>
      {posts.map((post) => (
        <Wrapper key={post.id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Wrapper>
      ))}
    </Container>
  );
};

export default Posts;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import {
  Container,
  Title,
  Content,
  Date,
  ButtonsWrapper,
  Button1,
  Button2,
  TextWrapper,
} from "./Post.elements";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <Container>
      <TextWrapper>
        <Title> {post.title}</Title>
        <Content> {post.content}</Content>
        <Date> {post.time}</Date>
      </TextWrapper>

      <ButtonsWrapper>
        <Button1
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          Edit
        </Button1>
        <Button2
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          Delete
        </Button2>
      </ButtonsWrapper>
    </Container>
  );
};

export default Post;

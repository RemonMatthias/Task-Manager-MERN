import React, { useState, useEffect } from "react";
import {
  Container,
  TheForm,
  Title,
  Input,
  Button1,
  ButtonWrapper,
} from "./Form.elements";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    time: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      content: "",
      time: "",
    });
  };

  return (
    <Container>
      <TheForm onSubmit={handleSubmit}>
        <Title>{currentId ? "Edit" : "Create"} a Task</Title>

        <Input
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <Input
          placeholder="Content"
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        />
        <Input
          placeholder="Time"
          value={postData.time}
          onChange={(e) => setPostData({ ...postData, time: e.target.value })}
        />

        <ButtonWrapper>
          <Button1 type="submit">Submit</Button1>
        </ButtonWrapper>
      </TheForm>
    </Container>
  );
};

export default Form;

import React from "react";
import MyButton from "./UI/button/myButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PostItem = (props) => {
  const router = useHistory()

  return (
    <div className="post">
      <div className="post_content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default PostItem;
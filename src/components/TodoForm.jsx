import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addTodoHandler = () => {
    if (!title.trim() || !body.trim()) {
      alert("제목과 내용을 모두 입력하세요.");
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        title,
        body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodoHandler();
      }}
    >
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <label>내용: </label>
      <input
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button>추가</button>
    </form>
  );
}

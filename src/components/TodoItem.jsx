import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { id, title, body, isDone } = todo;

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const toggleTodoHandler = (id, isDone) => {
    dispatch(toggleTodo({ id, isDone }));
  };
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {title}</p>
        <p>내용: {body}</p>
      </section>
      <section>
        <button
          onClick={() => {
            toggleTodoHandler(id, isDone);
          }}
        >
          {isDone ? "취소" : "완료"}
        </button>
        <button
          onClick={() => {
            deleteTodoHandler(id);
          }}
        >
          삭제
        </button>
      </section>
    </li>
  );
}

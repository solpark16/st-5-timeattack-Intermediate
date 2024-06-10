import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const { todos } = useSelector((state) => state.todo);
  return (
    <section>
      <h2>{isDone ? "Done" : "Working..."}</h2>
      <ul>
        {todos
          .filter((todo) => {
            return todo.isDone === isDone;
          })
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </ul>
    </section>
  );
}

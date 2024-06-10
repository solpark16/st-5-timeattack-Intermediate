import { Provider } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import store from "./redux/config/configStore";

// TODO: todos 상태를 리덕스를 이용한 전역상태로 관리한 투두리스트를 작성해 보세요.
function App() {
  return (
    <Provider store={store}>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </Provider>
  );
}

export default App;

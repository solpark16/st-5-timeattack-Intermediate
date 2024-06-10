import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeCount } from "./redux/slices/calculatorSlice";
import { useState } from "react";
// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const { count } = useSelector((state) => state.calculator);
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const addCountHandler = () => {
    dispatch(addCount(number));
    setNumber(0);
  };
  const removeCountHandler = () => {
    dispatch(removeCount(number));
    setNumber(0);
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />{" "}
        만큼을{" "}
        <button
          onClick={() => {
            addCountHandler();
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            removeCountHandler();
          }}
        >
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;

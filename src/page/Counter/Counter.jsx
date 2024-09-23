import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Store/slices/counter";

export default function Counter() {
  const state = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      Counter is : {state}
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleIncrement();
        }}
      >
        increment
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleDecrement();
        }}
      >
        increment
      </button>
    </div>
  );
}

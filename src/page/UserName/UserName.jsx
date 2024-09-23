import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../Store/slices/userName";

export default function UserName() {
  const state = useSelector((state) => state.userName.userName);

  const dispatch = useDispatch();

  const handleName = () => {
    dispatch(changeName(`${state === "ahmed" ? "mohamed" : "ahmed"}`));
  };

  return (
    <div>
      User Name is: {state}
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleName();
        }}
      >
        Change Name
      </button>
    </div>
  );
}

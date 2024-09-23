import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../Store/slices/language";

export default function Home() {
  const state = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeLanguage(`${state == "ar" ? "en" : "ar"}`));
  };
  return (
    <div>
      Home
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleChange();
        }}
      >
        Change Language
      </button>
    </div>
  );
}

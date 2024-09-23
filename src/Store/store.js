import { configureStore } from "@reduxjs/toolkit";
import language from "./slices/language";
import counter from "./slices/counter";
import userName from "./slices/userName";

export default configureStore({
  reducer: {
    language: language,
    counter: counter,
    userName: userName,
  },
});

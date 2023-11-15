/* C:\Work\07_Si\03_SimpleDMS_Login\01_Login\frontend-react-new\src\index.tsx */
// TODO: import
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// TODO : React Router import
import { BrowserRouter } from "react-router-dom";
// TODO : 공유 저장소 import
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  /* Provider : Redux 공유 저장소 추가*/
  <Provider store={store}>
    {/* BrowserRouter : React Router */}
    <BrowserRouter> <App /> </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

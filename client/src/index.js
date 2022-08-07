import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./styles.css";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const loading = (
  <div>
    <h2>Loading</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>
);

//App.js

import React, { useState } from "react";
import { Link, Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";

export default function App() {
  const history = useHistory();
  const [val, setVal] = useState("");

  return (
    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link to={"/subtask3"}>Show protected information if</Link>
      <span>&nbsp;</span>
      <input size="5" value={val} onChange={(e) => setVal(e.target.value)} /> is
      odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input
          type="checkbox"
          onChange={(e) => {
            e.target.checked && history.push("/subtask4");
          }}
        />
      </div>
      <Route
        path={"/subtask3"}
        render={() =>
          val % 2 === 1 ? (
            <div>Subtask3, protected information</div>
          ) : (
            <Redirect to={"/"} />
          )
        }
      />
      <Route
        path={"/subtask4"}
        render={() => <div>Subtask4, navigated programmatically</div>}
      />
    </div>
  );
}

// Index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

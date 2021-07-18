import React, { Suspense } from "react";
import "./style/css/main.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const Main = React.lazy(() => import("./components/Main"));

  const AllProjects = React.lazy(() => import("./components/AllProjects"));
  const AiBloc = React.lazy(() => import("./components/Aibloc"));
  
  return (
    <Suspense fallback={<div className="spinner"></div>}>
      <div className="website__wrapper">
        <Router>
          <Switch>
            <Route exact component={Main} path="/" />
            <Route exact component={AllProjects} path="/projects" />
            <Route exact component={AiBloc} path="/case-study/aibloc" />
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;

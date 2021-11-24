import React from 'react';
import Main from './components/Main';
import { moduleIds } from './utils/modules';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './w3.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/:moduleId?" render={({ match }) => {
            // this is a workaround
            // need to find a way to narrow the type from
            // a list or enum
            const moduleId: moduleIds = (
              match.params.moduleId && (
                match.params.moduleId === "request" ||
                match.params.moduleId === "login"
              )
            ) ? match.params.moduleId : "browse";
            
            const moduleTitle = moduleId.charAt(0).toUpperCase() + moduleId.slice(1)
            
            return (
              <Main moduleFocus={moduleId} moduleTitle={moduleTitle}/>
            );
        }}/>
      </Router>
    </div>
  );
}

export default App;

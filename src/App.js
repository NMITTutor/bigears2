import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Hello from './Views/Hello';

function App() {
  return (
    <div className="App">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route  path="/index.html" component={Hello} />
                            <Route  path="/" component={Hello} />
                            {/* Commented out 
                            <Route exact path="/contacts" component={Contacts} />
                            <Route exact path="/add" component={AddContact} />
                            <Route exact path="/edit" component={AddContact} />
                            <Route exact path="/todds" component={Todds} />
                            */}
                            <Route render={() => <h1 className="notfound">Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            
    </div>
  );
}

export default App;

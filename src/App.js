import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Novels from "./pages/Novels"
import AddNovel from "./pages/AddNovel"
import Login from "./pages/Login"
import useToken from './components/useToken';

function App() {
  
  const { token, setToken } = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Novels} />
        <Route path='/novels' component={Novels} />
        <Route path='/addnovel' component={AddNovel} />
      </Switch>
    </Router>
  );
}

export default App;
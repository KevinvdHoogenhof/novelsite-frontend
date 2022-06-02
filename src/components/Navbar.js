import { Button } from 'bootstrap';
import React, { useState,useEffect }  from 'react';
import { Redirect } from 'react-router-dom';
import "../styles.css";
import useToken from './useToken';

function Logout(){
  //console.log("test")
  localStorage.removeItem("token")
  window.location.href = "/"
}


var name = 'name';
const Navbar= () =>{
  const { token, setToken } = useToken();
    const [info, setAccountInfo] = useState(); 
    
    useEffect(() => {
        fetch('https://localhost:9001/account/info?token='+token)
         .then((response) => response.json())
         .then(response=>setAccountInfo(response))
    }, []);
    console.log(info)
  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">
    NovelSite
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/Novels">
          Novels <span className="sr-only"></span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/AddNovel">
          Add Novel
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={`/favorites/${(info !== undefined) ? info.id : 1}`}>
          Favorites
        </a>
      </li>
      <li className="logout">
        <a className="nav-link" onClick={() => {Logout()}}>
          Logout
        </a>
      </li>
      <li className="login">
        <a className="nav-link">
        Welcome, {(info !== undefined) ? info.name : name}
        </a>
      </li>
    </ul>
  </div>
  </nav>
  );
}

export default Navbar;
import React from 'react';
import {  Link } from "react-router-dom";
import AccountInfo from './AccountInfo';

const Navbar= () =>{
  // return (
  // <div>
  //   <li>
  //     <Link to="/">Novels</Link>
  //   </li>
  // </div>
  // );
/*  const { token } = useToken();

  fetch('https://localhost:9001/novel/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  
  const account = {
    id = null,
    name = null,
    email = null,
    roleName = null
  };*/
  ///
  //fetch('https://localhost:9001/account/info?token='+token)
  //.then((response) => response.json())
  //.then((json) => console.log(json));

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
      <li className="login">
        return<AccountInfo/>
      </li>
    </ul>
  </div>
</nav>
);
}
export default Navbar;
import React, { useState,useEffect } from "react";
import useToken from './useToken';

// function Token(){
//     const token = useToken().token;
//     return token;
// }

export default function AccountInfo(){
    const { token, setToken } = useToken();
    const [accountinfo, setAccountInfo] = useState(); 
    let fetchUrl = 'https://localhost:9001/account/info?token='+token;
    console.log(fetchUrl);
    useEffect(() => {
        fetch(fetchUrl)
         .then((response) => response.json())
         .then(response=>setAccountInfo(response))
    }, []);

    return(
        <a className="nav-link" href="/Login">
        {
        accountinfo[0]
        }
        </a>
    )
}
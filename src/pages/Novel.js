import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../styles.css";
import "../novelstyles.css";
import useToken from '../components/useToken';

var title = 'title';
var author = 'author';
var coverImage = 'coverImage';
var description = 'description';
//var genre = 'genre';
function imageExists(image_url){
    var http = new XMLHttpRequest();
  
    http.open('HEAD', image_url, false);
    http.send();
  
    return http.status !== 404;
}
const Favorite = (e,userid,id) => {
    e.preventDefault();
    let fetchUrl = 'https://localhost:9001/Novel/addfavorite?userid='+userid+'&novelid='+id;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    console.log("test");
    //window.location.href = "/";
}
const Unfavorite = (e,userid,id) => {
    e.preventDefault();
    let fetchUrl = 'https://localhost:9001/Novel/removefavorite?userid='+userid+'&novelid='+id;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    console.log("test");
    //window.location.href = "/";
}
export default function Novel(){
    const { id } = useParams();
    const { token, setToken } = useToken();
    const [info, setAccountInfo] = useState(); 
    
    useEffect(() => {
        fetch('https://localhost:9001/account/info?token='+token)
         .then((response) => response.json())
         .then(response=>setAccountInfo(response))
    }, []);

    const [novel, setNovelInfo] = useState(); 
    
    useEffect(() => {
        fetch('https://localhost:9001/novel/'+id)
         .then((response) => response.json())
         .then(response=>setNovelInfo(response))
    }, [id]);
    console.log(novel)

    return(
       <div className="novel-item">
           <p>{(novel !== undefined) ? novel.title : title}</p>
           <p>{(novel !== undefined) ? novel.author : author}</p>
            {
                (imageExists((novel !== undefined) ? novel.coverImage : coverImage)) ? 
                <img className="novel-cover-img" src={(novel !== undefined) ? novel.coverImage : coverImage} />
                : <img className="novel-cover-img" src={'https://www.routledge.com/img/covers/image-not-available.png'} />
            }
            <div className="novel-description">{(novel !== undefined) ? novel.description : description}</div>
            {
                (info !== undefined && novel !== undefined)?
                <div>
                    <button onClick={ e => Favorite(e,info.id,novel.id)}>Favorite Novel</button>
                    <button onClick={ e => Unfavorite(e,info.id,novel.id)}>Remove from favorites</button>
                </div>
                :<div></div>
            }
       </div> 
    )
}
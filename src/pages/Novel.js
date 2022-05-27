import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../styles.css";
import "../novelstyles.css";

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
export default function Novel(){
    const { id } = useParams();

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
       </div> 
    )
}
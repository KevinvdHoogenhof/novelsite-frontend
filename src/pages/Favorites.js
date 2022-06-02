import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../styles.css";
import "../novelstyles.css";
import { Link } from "react-router-dom";

function imageExists(image_url){
    var http = new XMLHttpRequest();
  
    http.open('HEAD', image_url, false);
    http.send();
  
    return http.status !== 404;
}
export default function Favorites(){
    const { id } = useParams();
    const [novels, setNovels] = useState([])  

    useEffect(() => {
    fetch(("https://localhost:9001/novel/favorites?id="+id),{
    })
        .then((data) => data.json())
        .then((data) => setNovels(data))
    }, [])

    console.log(novels)

    return(
        <section className="container-vspace">
        <div className="section-body" id="all-novels-section">
            <ul className="novel-list">
                {novels.map((column) => (
                <li className="novel-item">
                    {/* <a title={column.title} onClick={() => Novels(column.id)} >
                        <h4 className="novel-title text2row">{column.title}</h4> */}
                        <Link className="novel-title text2row" to={`/novel/${column.id}`}>
                          {column.title}
                          {/* <h4 className="novel-title text2row">{column.title}</h4> */}
                          <figure className="novel-cover">
                          {
                            (imageExists(column.coverImage) === true) ? 
                              <img className="novel-cover-img" src={column.coverImage} />
                              : <img className="novel-cover-img" src={'https://www.routledge.com/img/covers/image-not-available.png'} />
                          }
                        </figure>
                        </Link>
                        {/* <figure className="novel-cover">
                          {
                            (imageExists(column.coverImage) == true) ? 
                              <img className="novel-cover-img" src={column.coverImage} />
                              : <img className="novel-cover-img" src={'https://www.routledge.com/img/covers/image-not-available.png'} />
                          }
                        </figure>
                    </a> */}
                    <div className="novel-stats">
                        {column.description}
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </section>
    )
}
import React, { useState } from "react";

const initialValues = {
  title: "",
  author: "",
  coverimage: "",
  description: "",
};

export default function AddNovel() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let fetchUrl = 'https://localhost:9001/Novel?title='+values.title+'&author='+values.author+"&coverimage="+values.coverimage+"&description="+values.description;
    console.log(fetchUrl);
    fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    });
    //console.log("test");
    window.location.href = "/";
  };

  return (
        <form onSubmit={handleSubmit} className="text-center" style={{width: "100%"}}>
          <label>
            Title:
            <input
            value={values.title}
            onChange={handleInputChange}
            name="title"
            label="Title"
          />
          </label>
          <br></br>
          <br></br>
          <label>
            Author: 
            <input 
            value={values.author}
            onChange={handleInputChange}
            name="author"
            label="Author"
          />
          </label>
          <br></br>
          <br></br>
          <label>
            Coverimage:  
            <input
            value={values.coverimage}
            onChange={handleInputChange}
            name="coverimage"
            label="Coverimage"
          />
          </label>
          <br></br>
          <br></br>
          <label>
            Description:  
            <input
            value={values.description}
            onChange={handleInputChange}
            name="description"
            label="Description"
          />
          </label>
          <br></br>
          <br></br>
          <button type="submit"> Submit </button>
        </form>
  );
}